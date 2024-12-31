# this program plots the curves before drawing to p5js
# run on trinket.io
# does not compile in this project

import turtle

# Initialize turtle
t = turtle.Turtle()
t.shape("turtle")
t.hideturtle()
t.up()

# Set the starting position
t.setposition(69 * 1.5, 52 * 1.5)  # Scale the initial position
points = [67,45,69, 52, 69, 55, 65, 61.5, 64, 66, 66, 70.5,
70, 77, 71, 83, 70, 89]
# Scale the shape
scale_factor = 1.5  # Scaling factor

t.down()
for i in range(0, len(points), 2):
    x = points[i] * scale_factor  # Scale x-coordinate
    y = points[i + 1] * scale_factor  # Scale y-coordinate
    t.setposition(x, y)  # Move turtle to scaled position

################################# second curly 
# this program plots the curves before drawing to p5js
# run on trinket.io

import turtle

# Initialize turtle
t = turtle.Turtle()
t.shape("turtle")
t.hideturtle()
t.up()

# Set the starting position
t.setposition(27,5)  # Scale the initial position

points = [27,5,29,12,29,15,25,21.5,24,26,26,30.5,30,37,31,43,30,49,26,54,24,60,22,65,23,71,25,73,29,75,31,75]
# Scale the shape
scale_factor = 1.5  # Scaling factor

t.down()
for i in range(0, len(points), 2):
    x = points[i] * scale_factor  # Scale x-coordinate
    y = points[i + 1] * scale_factor  # Scale y-coordinate
    t.setposition(x, y)  # Move turtle to scaled position