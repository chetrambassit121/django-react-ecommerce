from django.urls import path 
from . import views 
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
# )

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    
    path('users/', views.getUsers, name="users"),
    path('users/profile', views.getUserProfile, name="users-profile"),
    
    
    path('products/', views.getProducts, name="products"),
    path('products/<str:pk>/', views.getProduct, name="product"),
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]




















# ............. after creating the views . created home path as routes this displays all our routes . products path displays json data on all products 

# from django.urls import path 
# from . import views 

# urlpatterns = [
#     path('', views.getRoutes, name="routes"),
#     path('products/', views.getProducts, name="products"),
# ]
