from django.shortcuts import render
from django.http import JsonResponse
from base.products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create/',
        
        '/api/products/upload',
        
        '/api/products/<id>/reviews/'
        
        '/api/products/top/',
        '/api/products/<id>/',
        
        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    return Response(products)

@api_view(['GET'])
def getProduct(request, pk):
    product = None
    
    ''' get the products _id , matching it with the products pk, then breaking '''
    for i in products:
        if i['_id'] == pk:
            product = i
            break
        
    return Response(product)




















# ................... importing RF decorator / response ...  adding @apiview decoraters on the FBV's . the decorator is for GET getting data . we can now view routes on the DRF interface   

# from django.shortcuts import render
# from django.http import JsonResponse
# from .products import products
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# # Create your views here.

# @api_view(['GET'])
# def getRoutes(request):
#     routes = [
#         '/api/products/',
#         '/api/products/create/',
        
#         '/api/products/upload',
        
#         '/api/products/<id>/reviews/'
        
#         '/api/products/top/',
#         '/api/products/<id>/',
        
#         '/api/products/delete/<id>/',
#         '/api/products/<update>/<id>/',
#     ]
#     return Response(routes)

# @api_view(['GET'])
# def getProducts(request):
#     return Response(products)























# ............ creating a get Routes/Product function based views  .......... data is json format will be displayed 

# from django.shortcuts import render
# from django.http import JsonResponse
# from .products import products
# # Create your views here.

# def getRoutes(request):
#     routes = ['api routes']
#     return JsonResponse(routes, safe=False)

# def getProducts(request):
#     return JsonResponse(products, safe=False)

