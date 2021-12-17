# E-Coomerce-using-Spring-Angular
full-stack-angular-spring-boot
TypeScript:Data types
      Boolean,number,string,any.............
 Synax:let<varaible>:type=<intial value>
 
        Let found:boolean =true;
        let grade:number = 88.9;
        let firstname : string="saji";
 Slides Link:   https://drive.google.com/drive/u/1/folders/1BZMYXG_YCA9IlT2iBoe8FQSpGhTEvHgN
      
      
 TypeScript only support single inheritance.

However, you can implement multiple interfaces.

Alrighty, so let's look at an inheritance example.
 
      
ABSRACT CLASS:::::::::::::::::::::::
      
      So an abstract class represents a general concept.

So, for example, a shape, a vehicle, a computer, and so on.

So you can't create an instance of an abstract class,

because there's still some details

that need to be filled in, in general.

Also, an abstract class can have abstract methods

and then the abstract method must be

implemented by concrete subclasses.

So let's take a look at this with an example.

So what we'll do is make our shape an abstract class.

So it has some common features,

but it will have an abstract method calculate area,

because how you calculate the area

for a shape depends on what type of shape it is.

So circle has one formula,

a rectangle has another formula, and so on.

So every shape class must implement

the calculate area method.

So as an example here,

the area of a circle is pi times the radius squared.

And then for a rectangle, the area is width times length.

So as you can see, that abstract method

at the shape level has to be implemented

by the actual subclasses.

Okay so let's look at a coding example

here for an abstract class.

So we'll make the shape class abstract

using the abstract keyword.

And we'll also have an abstract method

by making use of the abstract keyword on the method.

But note here, this method has no implementation,

it's simply an abstract method.

So then we have our rectangles,

so we have our class rectangle extends shape.

So then we have to override the calculate area method,

and provide our own implementation.

And so earlier, as I mentioned,

the actual area for our rectangle is width times length.

So let's look at an example with circles.

Our circle extends shape,

so we have to override the calculate area method,

and in here we return pi times radius squared.

So what we do here is make use of the math object.

It's a built-in object that has properties

and methods for mathematical constants and functions.

So there's a math dot pi,

and then a math dot pow power, so you give the actual value

and the actual exponent that you want.

So that will still give us our radius squared.

There are some other ways we could implement this,

like we could say, in this case it's very simple,

we could simply say, radius times radius for radius squared.

But here I simply wanted to show you

how you can make use of the math built-in object.

Alrighty, so here creating an instance.

So, this code will not compile,

since shape is an abstract class.

So we can't create an instance

of an abstract class directly.

We can only create an instance of concrete subclasses,

such as circle, rectangle, so on.

And so a concrete subclass

is a class that's not abstract,

and it implements all of the abstract methods.

Okay so let's go ahead and create an array of shapes here.

So we have my circle, my rectangle.

We declare an array of shapes like we've done before.

We add the shapes to the array, we simply do a four loop.

So we console dot log on tempShape dot getinfo

and then we have a new entry here.

We say console dot log area equals

and then tempShape dot calculateArea.

So again, depending on the type of shape

they'll use their own formula

for calculating their given area.

And then they have a console dot log here

just to give me a line break.

I could have easily used a backslash end for a line break,

but I simply wanted to keep the code simple,

and I just added that extra line.

But, either way will work.

So here's the output, the first entry here is for circle,

so we have x, y, radius of twenty

and then the area equals pi times the radius squared.

And then a similar thing here for our rectangle,

x, y, width, length,

and then the area equals width times length.

Alrighty, so let's go ahead and move into our IDE,

and let's test out this co.
      
      
      
      
    ***************************************Interface*******************************
      So TypeScript supports interfaces.

So we define an interface with a method contract

and then the classes will implement

the interface accordingly and a class can implement

multiple interfaces in TypeScript.

TypeScript can also use interfaces

to support contracts with properties.

So for examples of properties,

see the link here on the slide.

Okay, so let's go ahead and look at interfaces,

and in particular, making use of interfaces

with method contracts.

All right, so we'll have this interface here for Coach.

And so there's a method called getDailyWorkout().

So all classes that implement the interface

must implement the method getDailyWorkout().

So here on the bottom left, we have the Cricket Coach,

they'll give their own daily workout,

and then the Golf Coach will give their own

respective daily workout.

And again, these are different workouts

because these are different sports.

So up top, I'll create my Coach interface.

And I'll have a method here getDailyWorkout() string.

There's no body, there's no implementation code.

And then at the bottom left, I have my CricketCoach

that implements Coach.

So we're implementing the interface.

And then we provide our method here getDailyWorkout().

So we return "Practice your spin bowling technique."

And then a similar thing here for GolfCoach.

So GolfCoach implements Coach.

And then getDailyWorkout() here says

"Hit 100 balls at the golf range.".

Now, let's kind of pull it all together

with the main application.

So on our Driver, we do our imports up top.

Create myCricketCoach equals new CricketCoach().

Now go console.log on getDailyWorkout().

And a similar thing here for myGolfCoach

equals a new GolfCoach, and then I call

myGolfCoach.getDailyWorkout().

And then this gives us the output here.

So the first line is from CricketCoach,

and then the second line is from the GolfCoach.

Okay, so now let's create an array of Coaches.

So in my ArrayDriver.cs, I have my two coaches created.

Then I declare an array for coaches, initially empty.

And I simply say theCoaches.push(myCricketCoach)

and then push(myGolfCoach).

And then I set up a for loop.

So I have let tempCoach of theCoaches console.log

tempCoach.getDailyWorkout().

So this will print out the daily workout

from each coach in our array.

All right, let's go ahead and move into our IDE

and let's write the code.
