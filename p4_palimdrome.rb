#Largest palindrome product
def check_palim?(n)
	return true if n.to_s.reverse.eql?(n.to_s)
end

for factor1 in 900..1000
	for factor2 in 900...1000
		result=factor1*factor2
		if check_palim?(result)
			print "#{result} is a palimdrome \n"
		end
	end

end
