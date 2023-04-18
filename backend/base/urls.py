from django.urls import path 
from . import views 

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('products/', views.getProducts, name="products"),
    path('products/<str:pk>/', views.getProduct, name="product"),
]




















# ............. after creating the views . created home path as routes this displays all our routes . products path displays json data on all products 

# from django.urls import path 
# from . import views 

# urlpatterns = [
#     path('', views.getRoutes, name="routes"),
#     path('products/', views.getProducts, name="products"),
# ]
