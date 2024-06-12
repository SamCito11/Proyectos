from django.urls import path
from .views import EventoListView, EventoCreateView, EventoUpdateView, EventoDeleteView, EventoDetailView

app_name = 'eventos'

urlpatterns = [
    path('', EventoListView.as_view(), name='evento_list'),
    path('<int:pk>/', EventoDetailView.as_view(), name='evento_detail'),
    path('nuevo/', EventoCreateView.as_view(), name='evento_create'),
    path('<int:pk>/editar/', EventoUpdateView.as_view(), name='evento_update'),
    path('<int:pk>/eliminar/', EventoDeleteView.as_view(), name='evento_delete'),
]
