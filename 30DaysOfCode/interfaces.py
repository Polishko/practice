from abc import ABC, abstractmethod

# class AdvancedArithmetic(object):
class AdvancedArithmetic(ABC):
    @abstractmethod
    def divisorSum(n):
        raise NotImplementedError

class Calculator(AdvancedArithmetic):
    def divisorSum(self, n):
        max_num = int(n ** 0.5)
        sum_divisors = 0
        for num in range(1, max_num + 1):
            if n % num == 0:
                sum_divisors += num
                if num != n // num:
                    sum_divisors += n // num
        return sum_divisors


n = int(input())
my_calculator = Calculator()
s = my_calculator.divisorSum(n)
print("I implemented: " + type(my_calculator).__bases__[0].__name__)
print(s)