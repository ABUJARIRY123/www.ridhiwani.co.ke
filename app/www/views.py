from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("<h2>This is our server where our application will run it</h2>")