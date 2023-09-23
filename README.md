# Zen-Hotel

Tech Stack:
React,
Tailwind,
Framer Motion,
React Router

This project is a mock website for a ficticious hotel - but one I would like to stay at!


# 23/9/23
## Where am I up to? 

I have pushed this project further along than I oringinally should have, however this is the project so far:

## Structure:
The landing page structure is now in place this includes
### NavBar
The NavBar Connects to a check availability section which will then take the user to the type of room for the event they are looking for.
> Functionality and room page creation still to be done.

#### First Section
The first title page is a video showing the inside of the hotel

#### Second Section
The second section shows a list of the facilities that are provided by the hotel. These images are rendered dynamically from my inages folder. When the user hovers over the image, 
an overlay appears with the name of the facility e.g. A spa image with render the text spa on mouse enter.

```<div className="flex h-screen items-center">
{/* First Image */}
<ImageWithHoverOverlay image={IMAGES.image1} overlayContent={"EAT"} />
 {/* Second Image */}
<ImageWithHoverOverlay image={IMAGES.image2} overlayContent={"SPA"} />

{/* Third Image */}
<ImageWithHoverOverlay
image={IMAGES.image3}
overlayContent={"WEDDINGS"}
/>
</div>
```
#### Third Section

The third section is rendered using the same component as the second but lists a range of Restaurants.



### TO DO

Create the rooms
Model menu for each Restaurant
Create pages for the facilities
