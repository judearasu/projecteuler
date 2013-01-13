#By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
#What is the 10 001st prime number?
def finding_primes(limit)
	list=2;
	number=3
	while number <=limit
		number=number+2;
		prime=true
		x=3;
        while(x<=Math.sqrt(number))
        	x=x+2;
        	if number%x==0
        		prime = false;
        		break;
        	end
        end               
        if prime
        	temp=number;
        end
        p temp
    end
end

p finding_primes(10)

