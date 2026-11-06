---
period: January 2026 - Present
role: Software Developer
organization: Hackerspace MMU
order: 2
supplementalLinks:
  - label: Hackerspace Website
    url: https://hackerspacemmu.rocks
  - label: LinkedIn Launch Post
    url: https://www.linkedin.com/feed/update/urn:li:activity:7467619355485319170/
  - label: Hacktrack Ecosystem
    url: https://tharshen.xyz/experience/hackerspace-ecosystem
tools:
   - Ruby on Rails
   - Google Apps Script
   - Heroku
   - Scripting
   - Teamwork
   - Communication
---

[Hackerspace MMU](https://hackerspacemmu.rocks) is a makerspace where builders in MMU get together and geek out over stuff. Established in 2011, it has grown substantially over the years, with 70+ active members today.

I joined in May 2025 as a member. Around December 2025, I volunteered to join the development team to work on revamping the internal member management system (Hacktrack MMU). Hacktrack first started as a tutorial project, but turned into a full-fledged record keeping system over the years. It's written in Ruby on Rails, which should tell you it has been around for quite a while.

My involvement came in a push to modernize and streamline Hackerspace's existing workflows. In particular, my work revolved around syncing, preserving, and manipulating organizational data.

## Migrating and Unifying 15 Years of Data 
### The Problem
Prior to this, Hackerspace had a problem where data was stored in two places: a Ruby on Rails backend hosted on Heroku, and a Google Sheets spreadsheet. This made keeping both sources in sync with each other extremely difficult, as it was too much of a hassle to update both sources at the same time. As a result, data was constantly out of sync.

### My Solution
I slowly unified the data shared between the two data sources. For data where the spreadsheet is accurate, I carefully overwrote the existing, outdated data in Hacktrack, and vice versa. Of course,  was done with explicit approval from Hackerspace executives and its founder. 

All data manipulations were done through a Ruby script, with exhaustive local testing conducted before executing it on production.

### Outcome and Impact
All member data was preserved and data was identical across both Hacktrack and spreadsheet. No more "Hacktrack says X, spreadsheet says Y".


## Engineered a Member Data Update Pipeline
As a continuation to the previous data migration section, what happened after data was unified? How did we solve the root problem of "don't want to update both Hacktrack and spreadsheet, it's too much work"?

### The Problem
Ultimately, it boiled down to this: there had been no way to simultaneously update member records in Hacktrack and the spreadsheet.

### My Solution
I introduced a new way to keep track of which member in Hacktrack is recorded in which row in the spreadsheet: a unique member ID that is stored in both Hacktrack DB and the spreadsheet. Then, set up a method that updates the corresponding member's record in the spreadsheet when a member is updated in Hacktrack, obtaining the correct row in the spreadsheet to be updated by querying for the unique member ID.

Seems simple enough, but it came with quite a bit of complications. You see, some members registered multiple times, creating multiple entries of the same member in the spreadsheet, but only one record of that member exists in Hacktrack. How do we know which row in the spreadsheet needs to be changed when that member's records is changed in Hacktrack? To combat this, I ran a Ruby script to check for members with duplicate records in the spreadsheet, and then mark all entries other than their latest row in the spreadsheet as "Duplicate". The remaining non-duplicate row was the authorative record in the spreadsheet pertaining to that member.

### Outcome and Impact
This solution paved the way for dual-source data syncing: since the unique member ID exists, any updates to records in Hacktrack can now be synced to the spreadsheet too, eliminating any manual work in this regard. Now, the spreadsheet is read-only, but still ready to be used in case the Rails backend goes down one day.


## Automated New Member Registration Data Update Pipeline

### The Problem
Before this, member registration worked like this:
1. New member registers through a Google Form. Their response is saved to a Google Sheets spreadsheet.
2. Hackerspace executives manually sets the new member's status to "Registered" in the "Status" column of the spreadsheet.
3. Hackerspace executives manually add this new member to Hacktrack, copying the values from the spreadsheet.

As you can see, there were a lot of manual work involved. Executives had to copy and paste a lot of values, making the entire process slow and error-prone.

### My Solution 
I built a zero-touch data update pipeline to solve this. I set up Google Apps Script to automatically send a new member's details to the Hacktrack backend, which in turn, creates the new member automatically. Then, Hacktrack returns the unique member ID (for linking the corresponding member record in Hacktrack and in the spreadsheet), and Apps Script injects the new registration's values into a new row in the members spreadsheet, along with the unique member ID.

### Outcome and Impact
Now, member onboarding is done through Hacktrack only, saving time and effort for Hackerspace executives. 


## Why I Cherish This Experience
Seeing the pipelines I built and implemented being used in a meaningful way is highly rewarding and satisfying. The months and late nights I spent debugging, troubleshooting, and perfecting my solutions were worth it.

Special thanks to Tharshen, Wei Jie, and Willie for guiding me along the way.
