from rest_framework import viewsets
from .models import Trip
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TripSerializer

@api_view(['POST'])
def log_request(request):
    # Here you can handle the logging logic
    # For example, log the request data
    print(request.data)  # Replace this with actual logging logic
    return Response({"message": "Logged successfully"}, status=200)

class TripViewSet(viewsets.ModelViewSet):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
