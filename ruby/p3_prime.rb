#The prime factors of 13195 are 5, 7, 13 and 29.
#What is the largest prime factor of the number 600851475143 ?
def prime(number)
	factors=[]
	divider=2
	while number > 1
		while number%divider==0
			factors.push(number)
			number/=divider
		end
		divider+=1
	end
	return factors
end
prime_factors=prime(600851475143)
prime_factors.each{|fac| print "#{fac}\n"}
