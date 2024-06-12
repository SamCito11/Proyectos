from django.db import models
from participantes.models import Participante


# Create your models here.

class Evento(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    descripcion = models.TextField()
    fecha = models.DateField()
    hora = models.TimeField()
    ubicacion = models.CharField(max_length=255)
    participantes = models.ManyToManyField(Participante, through='Asistencia')

    def __str__(self):
        return self.nombre

class Asistencia(models.Model):
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE)
    participante = models.ForeignKey(Participante, on_delete=models.CASCADE)
    fecha_asistencia = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.participante.nombre} {self.participante.apellido} - {self.evento.nombre}"
