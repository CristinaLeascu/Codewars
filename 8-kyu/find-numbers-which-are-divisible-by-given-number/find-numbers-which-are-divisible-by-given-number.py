def divisible_by(numbers, divisor):
    # Create a list to store numbers divisible by the divisor
    divisible_numbers = []
    
    # Loop through the list of numbers
    for number in numbers:
        if number % divisor == 0:  # Check divisibility
            divisible_numbers.append(number)
    
    # Return the list of divisible numbers
    return divisible_numbers
​