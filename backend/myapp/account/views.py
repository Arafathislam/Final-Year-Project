
from rest_framework.parsers import FileUploadParser
from rest_framework.views import APIView
from rest_framework.response import Response
import io, csv, pandas as pd
from .serializer import *
from rest_framework import generics
from rest_framework import status

class UploadFileView(generics.CreateAPIView):
    serializer_class = FileUploadSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        file = serializer.validated_data['file']
        reader = pd.read_csv(file)
        for _, row in reader.iterrows():
            new_file = Medicine(
                       brand_id = row['brand_id'],
                       brand_name = row['brand_name'],
                       brand_type = row['brand_type'],
                       slug = row['slug'],
                       dose_from = row['dose_from'],
                       generic = row['generic'],
                       strength= row['strength'],
                       package_container= row['package_container'],
                       package_size= row['package_size'],

                       )
            new_file.save()
        return Response({"status": "success"},
                        status.HTTP_201_CREATED)