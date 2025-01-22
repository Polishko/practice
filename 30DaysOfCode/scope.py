class Difference:
    def __init__(self, a):
        self.__elements = a
        self.maximumDifference = None

	# Add your code here
    def computeDifference(self):
        absolute_values_array = [abs(x) for x in self.__elements]
        self.maximumDifference = max(absolute_values_array) - min(absolute_values_array)


# End of Difference class

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)
