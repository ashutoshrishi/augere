Live Article Augmentation Editor.
=========================================


Thousands of articles are written every day for various news sources, personal blogs, social
networks and personal journals and much more. A regular work flow to formulate an article is to
collect information from various sources and efficiently put it together in one single post. It
usually involves comparing multiple pictures, multiple sources of validated information and a
hundred more tabs. How about having a streamline editor to automatically augment your
posts/articles with relevant data as you write?

#Take a simple use case:
This editor provides you with a minimal distraction free writing area. It is essential that the focus
should not be diverted from writing. You are writing about a place. Using ‘live NLP’ (Natural
Language Processing) this editor will automatically detect that you have mentioned a place and
will start to display photos and information on that place on the side which you can directly drop
into your article if you find it relevant. Or you can move on and the images will gradually
disappear once it determines your focus has moved on from writing about the place. This is just
one of the multiple use cases I would like to offer to the users.

This is a very rough mockup of the final interface. Although it is as minimal as it can be as shown
above. The side module boxes will pop up only when invoked and will expire away gracefully
while you can continue writing.

The entire process is modular. The ‘Image fetch’ and ‘Information fetch’ are two different
modules which a single master NLP analyzer process will call upon when it wants. Spell Check
and Thesaurus and Synonyms are some other elementary modules. Here are examples of
some amazing modules I will be implementing:

###➔ Twitter Module:
When a @twitterusername is detected as being mentioned, the module will be called to
fetch a brief history of that users timeline using the twitter API calls. You can drag and
drop relevant tweets if you want to use them to illustrate a point in your post.

###➔ Code Syntax Check Module:
If you are a technical blog writer, you must be including a lot of code samples in your
articles. While the editor allows an easy way to include properly formatted and
line­numbered code snippets, it will also syntax check your code so that you do not need
to make an later edit due to a typo. If it is an interpreted language like Python, as an
added benefit, it would also try to evaluate your code.

###➔ Quotes Module:
To fetch quotes by your mentioned author automatically if the NLP engine figures out that
you have mentioned a Proper Noun and it happens to be an author.

###➔ Wikipedia Module:
To fetch wikipedia articles on topics you write about. This can be automatically initiated or
manually initiated. Text snippets from the fetched wikipedia article can be directly
dragged into your post while maintaining formatting.

###➔ Charts Module:
You can create beautiful charts using D3.js inline and have them embed into your article
as an image.

###➔ IMDB module:
Have you just mentioned a movie? Let the editor fetch a lot of useful information for you
from IMDB and other rating websites.

###➔ Link Checker:
All your included links will be checked for being actual relevant links automatically.

###➔ News Fetcher:
Get latest new list on the topics you are writing about.

###➔ And so much more...

While these modules are most likely to be called into working automatically as seen in the
mockup by the NLP engine, these can definitely be invoked through a keyword or simply just
choosing a module through a dropdown. The entire interface is polymorphic and everything is
hidden unless you really needed. This editor does not want to take your focus away from the
most vital part of an article: The writing.

*Speed*. Speed is essential for the NLP engine as it has to work in almost realtime. The
javascript frontend will maintain an asynchronous connection with the backend so that your text
can be processed immediately as you write by the NLP engine and eventually invoke a module to
perform.

#Output:
While an HTML or a markdown output works for most of the blogs and websites, this editor can
be used as a serious editor too for outputting word and pdf files.
If you think about it, there are very few limitations to what this editor can be used for. You can
even use it to write a normal facebook post while getting information from facebook, twitter and
much more to help you write a meaningful story.

#Conclusion:
The mission of this editor is to solve the problem of organisation. As a article writer you will be
able to write your articles faster and be more streamlined in your information gathering. It is a
new approach and I hope it gets picked up by serious writers in their daily usage.
