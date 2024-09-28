
# # prime number

# # num=int(input("enter"))
# # count=0
# # for i in range(2,num):
# #     if num%i==0:
# #         print("not prime")
# #         count+=1
# #         break
# # if count==0:
# #     print("prime")



# # input=123
# # output=6

# # num=input("enter")
# # sum=0
# # for i in num:
# #     sum+=int(i)
# # print(sum)

# # tasks

# # sum of odd digits in a given number
# # input:546
# # output:5

# # num=input("enter a number:")
# # oddsum=0
# # for i in num:
# #     if int(i)%2==1:
# #         oddsum+=int(i)
# # print(oddsum)


# # sum of even digits ina number 
# # input:546
# # output:10

# # num=input('enter a numbers:')
# # evensum=0
# # for i in num:
# #     if int(i)%2==0:
# #         evensum+=int(i)
# # print(evensum)

# # diff betweeen even sum and oddsum in a given number
# # input:16534
# # op:1

# '''num=input("enter a number:")
# oddsum=0
# evensum=0

# for i in num:
#     if int(i)%2==0:
#         evensum+=int(i)
#     else:
#         oddsum+=int(i)
# print(evensum-oddsum)'''

# # find largest sum between evensum and oddsum
# # input:9474
# # output:odd sum is bigger
# num=input("enter a number:")
# evensum=0
# oddsum=0
# for i in num:
#     if int(i)%2==0:
#         evensum+=int(i)
#     else:
#         oddsum+=int(i)
# print(evensum,oddsum)
# if oddsum>evensum:
#     print("odd sum is bigger")
# else:
#     print("even sum is bigger")


vowels=['a','e','i','o','u']

str=input("enter a char to check:")
count=0

for letter in str:
    if letter in vowels:
        print("vowel")
    else:
        print("not an vowel")

