#The sum of the squares of the first ten natural numbers is,
#12 + 22 + ... + 102 = 385

#The square of the sum of the first ten natural numbers is,
#(1 + 2 + ... + 10)2 = 552 = 3025

#Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

#Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

def squares(n)
	squares=0
	for x in (1..n) 
		squares+=x*x
	end
	return squares
end

def sum(n)
	sum=0
	for x in (1..n)
		sum+=x
	end
	sum*=sum
end

result = sum(100) - squares(100)

p result
