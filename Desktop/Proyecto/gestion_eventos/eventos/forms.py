from django import forms
from .models import Evento
from participantes.models import Participante
from django import forms
from .models import Evento

class EventoForm(forms.ModelForm):
    participantes = forms.ModelMultipleChoiceField(queryset=Participante.objects.all(), widget=forms.SelectMultiple(attrs={'class': 'form-control'}))
    class Meta:
        model = Evento
        fields = ['nombre', 'descripcion', 'fecha', 'hora', 'ubicacion']
        widgets = {
            'nombre': forms.TextInput(attrs={'class': 'form-control'}),
            'descripcion': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
            'fecha': forms.DateInput(attrs={'class': 'form-control', 'type': 'date'}),
            'hora': forms.TimeInput(attrs={'class': 'form-control', 'type': 'time'}),
            'ubicacion': forms.TextInput(attrs={'class': 'form-control'}),
        }
        labels = {
            'nombre': 'Nombre del evento',
            'descripcion': 'Descripción',
            'fecha': 'Fecha',
            'hora': 'Hora',
            'ubicacion': 'Ubicación',
        }
