#By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
#What is the 10 001st prime number?
#Solution 1
def prime_range(limit)
	list=2;
	i=3
    temp=[]
    temp << list
	i.step(limit,2) do |i|
        prime=true
        3.step(Math.sqrt(i),2) do |j|
            if i%j==0
               prime=false
               break
            end
        end
    if prime==true
       temp << i
    end
    end
   temp.flatten
end
x=0
until prime_range(x).length==100
  x=x+1
end
p prime_range(x)