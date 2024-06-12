from django.shortcuts import render

# Create your views here.
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Participante

class ParticipanteListView(ListView):
    model = Participante
    template_name = 'participantes/participante_list.html'

class ParticipanteDetailView(DetailView):
    model = Participante
    template_name = 'participantes/participante_detail.html'

class ParticipanteCreateView(CreateView):
    model = Participante
    fields = ['nombre', 'apellido', 'documento', 'email', 'estado']
    template_name = 'participantes/participante_form.html'
    success_url = reverse_lazy('participantes:participante_list')

class ParticipanteUpdateView(UpdateView):
    model = Participante
    fields = ['nombre', 'apellido', 'documento', 'email', 'estado']
    template_name = 'participantes/participante_form.html'
    success_url = reverse_lazy('participantes:participante_list')

class ParticipanteDeleteView(DeleteView):
    model = Participante
    template_name = 'participantes/participante_confirm_delete.html'
    success_url = reverse_lazy('participantes:participante_list')
