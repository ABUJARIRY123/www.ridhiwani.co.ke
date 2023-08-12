from django.db import models

# Create your models here.
class Audios(models.Models):
    speaker = models.CharField(max_length=230)
    block_title = models.CharField(max_length=130)
    topic = models.CharField(max_length=30)
    logo_of_speaker = models.CharField(max_length=2130)
    
class Duruus(models.Models):
    audios = models.ForeignKey(Audios, 0n_delete=models.CASCADE)