from django.contrib import admin
from .models import Trip

@admin.register(Trip)
class TripAdmin(admin.ModelAdmin):
    list_display = ('current_location', 'pickup_location', 'dropoff_location', 'current_cycle_used')
    search_fields = ('current_location', 'pickup_location', 'dropoff_location')
