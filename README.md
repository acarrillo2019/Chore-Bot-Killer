# Chore-Bot-Killer
A souped up version of Codecademy's famous Chore Bot project only this time it stars Horror movie icons!

Changes since last version:
- I changed the door images.
    It may seem like a simple chore, but it broke my game. Before the new closed door images, I would click on the closed door and it would either reveal Kitty or a horror movie monster. After I added the new closed door images, when I would click on the door, it would not reveal anything. Clicks did nothing. I tested the code, I changed code, rewrote code but the new door images still wouldn't fire off the click events in Javascript. For some reason, it would only work with the original Chore Bot door images. Those images were SVG files, so I thought that maybe the code didn't want to work with JPEGs for those objects. So I downloaded the original door image and put it into my working "images" path and updated my code and tested the game. OK, so SVGs or JPEGs didn't matter. Code broken. So I thought that it was a bug that had to do with hosting since the original Chore Bot closed door images were hosted online. So I uploaded the new door images to an online personal hosting account, updated my code and... IT WORKED.
    I don't know why it worked, but there it is. I lost alot of time working on this problem, at least forty-five minutes to an hour. I'm taking my frustration out, and hopefully helping out anybody who reads this, by writing this in the README.

