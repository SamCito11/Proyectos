from django.urls import path
from .views import ParticipanteListView, ParticipanteDetailView, ParticipanteCreateView, ParticipanteUpdateView, ParticipanteDeleteView

app_name = 'participantes'

urlpatterns = [
    path('', ParticipanteListView.as_view(), name='participante_list'),
    path('<int:pk>/', ParticipanteDetailView.as_view(), name='participante_detail'),
    path('nuevo/', ParticipanteCreateView.as_view(), name='participante_create'),
    path('<int:pk>/editar/', ParticipanteUpdateView.as_view(), name='participante_update'),
    path('<int:pk>/eliminar/', ParticipanteDeleteView.as_view(), name='participante_delete'),
]
