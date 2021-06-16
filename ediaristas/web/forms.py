from django import forms
from web.models import *

class DiaristaForm(forms.ModelForm):
    class Meta:
        model = Diarista
        fields = ('__all__')