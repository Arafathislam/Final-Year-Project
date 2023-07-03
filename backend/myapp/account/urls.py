from django.urls import path,include
from .views import *

urlpatterns = [
    path('upload-csv/', UploadFileView.as_view(), name='csv-upload'),
     path('medicine/', MedicineView.as_view(), name='medicineview'),
]