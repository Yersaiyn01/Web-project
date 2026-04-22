import os
from django.core.wsgi import get_wsgi_application

<<<<<<< HEAD
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'expense_tracker.settings')
=======
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
>>>>>>> front2
application = get_wsgi_application()
