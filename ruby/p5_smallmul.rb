#i = 1
#while true
#  break unless (2..20).any? {|d| i % d != 0}
#  i+=1
#end
#puts i

#What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

def smallest(n)
	divisible = false
	counter = 1
	until divisible ==true
		(1..n).each do |i|
			if counter % i !=0
				divisible = false
			else
				divisible = true
			end
			break if divisible == false
		end
		counter +=1

	end
	p counter -1
end
smallest(20)