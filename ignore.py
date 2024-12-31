# this program plots the curves before drawing to p5js
# run on trinket.io

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