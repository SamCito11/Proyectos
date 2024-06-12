from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, DetailView
from .models import Evento
from .forms import EventoForm
from django.urls import reverse_lazy

class EventoListView(ListView):
    model = Evento
    template_name = 'eventos/evento_list.html'

class EventoDetailView(DetailView):
    model = Evento
    template_name = 'eventos/evento_detail.html'

class EventoCreateView(CreateView):
    model = Evento
    form_class = EventoForm
    template_name = 'eventos/evento_form.html'
    success_url = reverse_lazy('eventos:evento_list')

class EventoUpdateView(UpdateView):
    model = Evento
    form_class = EventoForm
    template_name = 'eventos/evento_form.html'
    success_url = reverse_lazy('eventos:evento_list')

class EventoDeleteView(DeleteView):
    model = Evento
    template_name = 'eventos/evento_confirm_delete.html'
    success_url = reverse_lazy('eventos:evento_list')
