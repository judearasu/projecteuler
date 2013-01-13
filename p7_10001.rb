#By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
#What is the 10 001st prime number?
#Solution 2
def prime?(n)
	(2..(Math.sqrt(n))).each do |i|
		return false if n%i==0
	end
	return true
end
counter=0
i=2
until counter==10001
 if prime?(i)
 	counter+=1
 	puts i
 end
 i+=1
end

