from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TripViewSet, log_request

router = DefaultRouter()
router.register(r'trips', TripViewSet)

urlpatterns = [
    path('log/', log_request),  # New logging endpoint
    path('', include(router.urls)),
]
