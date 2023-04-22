from django.shortcuts import render
from django.http import JsonResponse
from base.products import products
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from .models import Product, User
from .serializers import ProductSerializer, UserSerializer, UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User 
from django.contrib.auth.hashers import make_password 
from rest_framework import status


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    #MY CUSTOME CODING
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data
    
    
    # ORIGINAL CODING FOR THIS CLASS
    # @classmethod
    # def get_token(cls, user):
    #     token = super().get_token(user)
    #     token['username'] = user.username
    #     token['message'] = 'hello world'
    #     return token
    
    

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)       
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)       # many=True b/c we will have many products to serilaze
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)    # many=False b/c we only want to return one product NOT many
    return Response(serializer.data)























# from django.shortcuts import render
# from django.http import JsonResponse
# from base.products import products
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

# @api_view(['GET'])
# def getProduct(request, pk):
#     product = None
    
#     ''' get the products _id , matching it with the products pk, then breaking '''
#     for i in products:
#         if i['_id'] == pk:
#             product = i
#             break
        
#     return Response(product)




















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

