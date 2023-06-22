from rest_framework import serializers
from .models import *

class FileUploadSerializer(serializers.Serializer):
    file = serializers.FileField()

class SaveFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicine
        fields = '__all__'