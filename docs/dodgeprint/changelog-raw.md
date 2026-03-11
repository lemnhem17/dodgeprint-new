# DodgePrint Changelog 2025

## Version 1.5.6 - December 17

#
New Features
#
1. Order Management : Added New Supplier Integrations (Printful, Printik and CustomCat)

We have added Printful, Printik, and CustomCat to our supplier integrations, allowing you to connect with these providers and submit orders directly from DodgePrint.




Navigation path: Fulfillment Center → Suppliers → Add Supplier

#
2. Smart Catalog : Introduced AI-Powered Product Creation

We have introduced AI Generator, enabling you to create products directly from designs or images with AI support.

This feature includes:

Template Library to quickly start from predefined product templates

AI Product Generator to generate products automatically




#
Enhancements
#
1. Order Detail (Shop Marketplaces): Added Refund Amount Display

We have added a Refund Amount field to the Order Detail view, providing clearer visibility into refunded values and making reconciliation easier for sellers.




#
2. Order Detail (Order Fulfillment): Added Shipping Label Submission to Suppliers

We have added support for sending shipping labels directly to suppliers from the Order Detail page. This enhancement enables more flexible fulfillment workflows when using pre-generated labels from selling platforms.




#
3. Supplier Mapping: Added Factory & Variant Mapping for BurgerPrints

We have added factory selection and corresponding product variants to Supplier Mapping for BurgerPrints, ensuring more accurate product configuration and order submission.




#
4. Bulk Product Listing: Improved Tag Management

We have improved tag management during bulk product edits.

You can now:

Add new tags

Remove or replace specific tags

This improvement helps maintain cleaner and more consistent tag data when managing products in bulk.




#
5. Shop List: Introduced a New UI with Cleaner Layout and Clearer Data

We have introduced a new Shop List interface with a cleaner layout and improved data presentation, making it easier to review and manage shop information at a glance.




#
6. Dashboard (Shop Level): Added Multi-Currency Support

We have added support for multiple currencies at the shop level. You can now view each shop’s data in its respective currency, providing more accurate insights when managing stores across different regions.

#
Bug fixes
#
1. Bulk Product Listing: Fixed Multiple Listing & Update Issues

We have fixed several issues affecting bulk listing and updates, including:

Timeout errors displaying “Something went wrong!”

Incorrect “Listing is being edited by another process” messages

Invalid product image errors during listing

Missing tags in DodgePrint after publishing to Etsy

Failed product publishing to Etsy

Bulk listing is now more stable and reliable.

#
2. Smart Catalog: Fixed Manual Product Creation Issue

We have fixed an issue where manually created products could remain stuck in Processing, preventing completion. 

Products are now created successfully after submission.

#
3. Description Template: Fixed Line Break Formatting

We have fixed an issue where line breaks were not applied correctly in product descriptions when using templates. 

Descriptions now display with proper formatting.

#
4. Order Management: Fixed Gearment Order Submission

We have fixed an issue caused by supplier-side changes that affected order submission to Gearment.

The system has been updated to ensure compatibility and successful order processing.

#
5. Dashboard: Fixed Reporting Data Issues

We have fixed multiple reporting issues, including:

Missing transaction data after reconnecting existing Etsy stores

Inconsistent order count and profit values

Dashboard data is now synchronized and displayed consistently.

---

## Version 1.5.5.4 - November 6

#
New Features
#
Order Management : Added New Supplier Integrations (MangoTee Prints, Pentifine)

We’ve added MangoTee Prints and Pentifine to the supplier list. You can now integrate with these suppliers and send orders directly from DodgePrint in just a few minutes.

Navigation path: Fulfillment Center → Suppliers → Add Supplier

📘 Setup Guide for MangoTee Prints Integration

📘 Setup Guide for Pentifine Integration

#
Enhancements
#
1. Fulfillment Order: Enhanced Filters

We've upgraded the filter system in Fulfillment Order to help you search and manage orders faster and more accurately.
Here’s what’s new:

New filters: You can now filter by Platform and Shop.

New search option: Try the Not Between filter to find more specific value ranges.

Fixes: The filters Is Empty and Is Not Empty now work properly.

Better visuals: Filter results are clearer and easier to understand.

#
2. Amazon Order Detail: Added Shipping Address Line

We’ve added the Address Line field for Amazon orders that are shipped by seller. 

→ This means you’ll now see the complete shipping address directly in DodgePrint — making it easier to process orders accurately and avoid delivery issues.










#
3. Order Detail: Updated Platform Shipping Method

You can now view the Platform Shipping method for each store directly in the order detail




#
4. Variation Template: Added Photos to Show Off Your Variations

We’ve added two key features to enhance how you manage product variations:

Image Index: Assign specific images to each variation using index numbers for better accuracy.

Custom Display Order: Easily reorder variation display while creating them – making your workflow more flexible and intuitive.




⚠️ Known Limitation: Currently, photos added to your variations only apply correctly during the first deployment. If you update them afterward, the images may not reflect as expected.

#
Bug fixes
#
Add Shops: Fixed Duplicate Entry Bug 

Fixed an issue where adding a new store would occasionally create duplicate entries. Now, each store will be added only once to the app, ensuring clean data and better store management.

---

## Version 1.5.5.3 - October 18

#
New Features
#
1. Fulfillment Order: Updated Etsy Tracking Sync Status (Manual & Auto)

You can now sync tracking numbers from Order Fulfillment directly to Etsy — either manually or automatically.
To make tracking status clearer, the system now visually indicates orders that:

✅ Success: Tracking numbers have been successfully synced to Etsy (manually or automatically).

⚠️ Failed: Tracking could not be sent to your shop due to an error.




#
2. Fulfillment Order: Updated Carrier for “No Carrier” Shipment

If your order tracking shows “No Carrier”, you can now manually select the correct shipping carrier.
This ensures Etsy receives accurate tracking details for smooth syncing.

Path: Order Fulfillment → Edit → Select Carrier → Save




#
3. Etsy Integration: Added Processing Profiles Management

You can now create and edit Processing Profiles directly in DodgePrint to set order fulfillment times — fully aligned with Etsy’s latest update, giving your listings more flexibility.

Made to Order: Created or personalized after purchase.

Ready to Ship: Already in stock and ready for immediate dispatch.

You can also set a default profile if preferred for faster listing setup.

Navigation path: Settings → Shop → Processing Profiles




#
Enhancements
#
1. Variation Template: Added Multi-Select and Exclude Options for Batch Edit

When using Batch Edit to create variations, you can now:

Select multiple options at once, or

Exclude specific options to fine-tune price and quantity settings.

This makes managing large variation groups much faster and more flexible.




#
2. Product Listing: Integrated Etsy Titles Suggestion

We’ve integrated Etsy’s AI-powered title suggestion tool. DodgePrint now automatically pulls title recommendations directly from Etsy data.
You can choose to edit or apply suggestions to a single listing or multiple listings at once.

💡 Note: These are Etsy-generated suggestions — not every listing will have optimized results.




#
3. Manual Create Product: Added Master Design Directly

You can now attach your Master Design while creating products — in two convenient ways:

Manual: Add the master design directly during product creation.

Import Excel: Include the master design when uploading via import file.

This update keeps your design data consistent and speeds up product setup.




#
4. Smart Catalog: Updated Linked Products & Tags to Designs

The Design module has been enhanced to help you organize and connect designs more efficiently.

Product Linking: Instantly view and manage which products use the same design, right inside the design editor.

Tags & Filters: Add tags to categorize designs and quickly filter or search by groups.

→ This makes it easier than ever to keep your design library neat and searchable.

---

## Version 1.5.5.2 - October 6

#
New Features
#
Order Management : Added New Supplier Integrations (Gearment, BurgerPrints)

We’ve added Gearment and BurgerPrints to the supplier list. You can now integrate with these suppliers and send orders directly from DodgePrint in just a few minutes.

Navigation path: Fulfillment Center → Suppliers → Add Supplier

📘 View the step-by-step guide




#
Bug fixes
#
1. Bulk Product Listing : Fixed readiness_state_id Issue

We updated handling for the processing profile requirement from Etsy. Creating and updating listings now works when a shop has exactly one processing profile.

Known limitations: Shops with zero, two, or more than two processing profiles may still encounter the readiness_state_id error. A broader fix is in progress.




#
2. Smart Catalog:  Fixed Videos Not Playing

Previously, some imported product videos couldn’t be played and didn’t show clear error messages. This issue has been resolved — all imported videos now play correctly, and any import errors will display clearly.




#
3. Smart Catalog:  Fixed Timeout Error Manual Product Creation

Creating multiple manual products at once used to trigger a timeout error. This issue has been fixed, and bulk manual product creation now runs smoothly.




#
4. Order Management:  Fixed Mismatched Order Statuses

In some cases, the order status and shipment status in the order detail didn’t match, causing confusion for sellers. This issue has been resolved — both statuses are now correctly aligned.

---

## Version 1.5.5.1 - September 23

#
New Features
#
1. Design Management: Design library created and linked with products

You can now save and organize all your designs in the new Design section. Designs can also be linked to products, making future order fulfillment faster and easier.

Navigation: Catalog Design → Design.
Why it helps: Keeps all your designs in one place and reduces repetitive work when managing products.

→ Learn how in this guide.

#
2. Order Fulfillment: Apply and save designs in orders

When fulfilling orders, you can now apply an existing design to order items or save a new design directly from the order for future use.
Why it helps: Speeds up the fulfillment process and lets you reuse designs without starting from scratch.
→  Learn how in this guide.

#
Enhancements
#
1. Order Status: Separated partial and full refunds

All refunded orders were previously grouped under “Refund” in the Orders → Listing tab. With this update:

Partial Refunded: shown for orders with partial refunds.

Refund (Fully Refunded): shown for orders fully refunded.




#
2. Fulfillment Order Detail: Added Origin SKU display

We added the seller’s original SKU (Origin SKU) in the Fulfillment Order Detail view. Orders can now be searched by product name or Origin SKU.




#
Bug fixes
#
1. Manual Product Creation: Fixed image upload size error

Previously, manual product creation failed when uploading large images. This has been fixed, and product creation now works smoothly with images up to 10MB.

#
2. Amazon Product Images: Fixed image update issue

The product image update feature for Amazon sometimes caused images to not display or fail to sync. This issue has been resolved, and product images now display and update correctly.

#
3. Amazon Product Quantity: Fixed inventory display mismatch 
#
4. Variant Template Import: Fixed template import error

Importing variant templates previously showed a “success” message without actually creating the template, or froze when importing large files. This has been fixed, and templates now import quickly and reliably.

---

## Version 1.5.5 - September 4

#
New Features
#
1. Google Sheets Integration: Added Google Sheets integration to send orders to suppliers

We added Google Sheets integration to Order Fulfillment. This update lets you configure and send orders to any supplier — even if they use their own system. You can send orders to a sheet in any template and they can import it on their side.

👉 This gives you the flexibility to work with a wide range of suppliers without limitations.

Navigation path: Fulfillment Center → Suppliers → Add Supplier

📘 View the step-by-step guide




#
2. Order Fulfillment: Enabled marking orders as fulfilled without sending to suppliers.

We added a feature that allows you to mark orders as fulfilled/completed without sending them to a supplier in DodgePrint.

This makes it easier to manage fulfillment and track order status, preventing orders from getting stuck in Pending.




📘 View the step-by-step guide




#
3. Order Fulfillment: Introduced automatic sync of tracking from suppliers and manual tracking to platforms

Order Fulfillment now supports automatic sync of tracking numbers from suppliers to DodgePrint.
You can also add tracking manually to orders and send it directly to your sales platforms.

#
Enhancements
#
Listing Performance: Introduced new UI for sorting and managing key metrics

We introduced a new UI that lets you sort and manage key product metrics the way you prefer, making it easier to evaluate listings and optimize performance effectively.




#
Bug fixes
#
1. Bulk Edit Listing: Fixed descriptions being cut off

Previously, product descriptions were not fully displayed in bulk edit.

This issue has been resolved, and descriptions now display correctly.

#
2. Order Fulfillment: Fixed incorrect prices in Order List

Previously, prices in the Order List were displayed incorrectly after submission to suppliers.

This issue has been resolved, and prices now display accurately.

---

## Version 1.5.4.2 - August 25

#
New Features
#
Export Center: Export All Orders from Any Shop or Platform

We’ve introduced Export Center, which allows you to export order data from all connected shops (Etsy, Amazon, TikTok Shop…) with optional filters to retrieve the data you need.

👉 Navigation: Go to Tools → Exports → Create Export → Select Filters → Create Export Request

#
Enhancements
#
Order Management: Removed Awaiting Payment (AP) Status

We’ve removed syncing and management for orders with the status Awaiting Payment (AP).

Reason:

AP status has limited operational value.

It caused discrepancies between the Dashboard and Order List because AP was not included in counts.

Customer counts were also affected.

This change makes numbers across Dashboard, Order List, and Customers consistent and easier to track.




#
Resource Management: Enabled Bulk User Access Control

We’ve added support for owners and managers to grant or remove access for multiple users at once on each shop, improving efficiency in user management.




#
Quotas: Updated Resource Quotas Calculation

We’ve updated the way resource quotas are calculated:

Products & Listings: Counted based on the total number of active items.

Orders:

Free plan: Quotas reset on the 1st of each month.

Paid plans + Licenses: Quotas reset according to the billing cycle.

#
Other Enhancements

Etsy: We’ve updated Platform Fee to include Transaction, Processing, Listing, Subscription, Set-Up, and Others.

Amazon: Added support for uploading tracking to Amazon orders.

Listing: Added filter for listings with video to improve management and search.

#
Bug fixes

Etsy Finances

Platform Fee numbers are now consistent between Dashboard and Finance.

Fixed missing data when exporting transaction files in Finance for Etsy shops.

Date range filter now applies correctly.




Others Bug Fixes:

Import Center: Fixed issue where failed import files could not be downloaded.




Pagination: Pagination in the Deployment tab and the See All option in notifications now work correctly.

Creative Fabrica Import: Fixed issue preventing product imports.

Description Template: Fixed issue when creating product descriptions via copy → paste.

---

## Version 1.5.4.1 - August 15

#
New Features
#
Workspace Resource Quota Management

We have introduceed the Workspace Resource Quota feature for each subscription plan, allowing you to easily monitor and manage usage limits.

Resource Quota Dashboard: Quickly view the number of Shops, Products, Orders, and Listings used versus your plan limit.




Over-limit Notifications: When Orders/Listings exceed your quota, the system will alert you and suggest an upgrade.

Billing & Subscription Details: Visually see your current plan, status, limits, and connected shops.







#
Enhancements
#
Separate Ads Fee from Platform Fees for Etsy Stats

We’ve made it easier to track your costs by separating Ads Fee from platform fees. We’ve also renamed Platform Fees to Total Fees for clarity.

See your total ad spend separate from other fees.

Analyze the share of ad costs to optimize your budget more effectively.

#
Bug fixes
#
1. Product Catalog Filter

We’ve fixed issues with the Has Digital and SKU filters:

Has Digital: Now works correctly with Yes and No options.

SKU: Now uses Listing SKU to accurately filter products in Products.

#
2. Listings Update

We’ve resolved issues with product publishing and price updates:

Fixed an issue where Physical without variants products couldn’t be published.

Fixed an issue where Digital product prices were not updated after making changes and deploying.

Fixed an issue where Descriptions were updated incorrectly when editing them after publishing.

#
3. Other bugs

Orders: Added detailed shipping status updates or orders.

Workspace: You can now rename your workspace directly in settings.

TikTok: Fixed an issue where Brand and Warehouse data from TikTok were not syncing.

Amazon: We now store product images in orders and mark deleted ASINs

---

## Version 1.5.4 - July 28

#
New Features
#
1. Sync Listings from Shops to Product Catalog

Listings are now automatically synced to your Product Catalog on DodgePrint after a shop is connected. The initial sync may take up to 15 minutes. After that, new listings will also be automatically synced.

Products are matched based on SKU:

If the SKU exists – the listing will be linked to the existing product in the Catalog, and the product will be updated with the associated shop.

If the SKU is blank or does not exist – a new product will be created in the Catalog and linked to the shop.

#
2. Manually Create Products in App

You can now create products directly within DodgePrint without needing to upload a CSV import file.

Navigation: Tools → Imports → Create Products

This update gives you more flexibility in managing your product catalog. You can either:

Upload image files from your device, or

Paste image URLs (supports .jpg, .png, .jpeg)

You can add products individually or create multiple products at once. This is ideal for sellers who want a faster way to add products without preparing files or working with third-party tools.




Refer to the step-by-step Product Creation Guide for full instructions on how to use this feature.

You can also import products directly from the Create Products page, allowing you to preview product information before completing the import.


#
3. “What’s New” now available in-app

We’ve added a “What’s New” section directly inside DodgePrint so you never miss an update. Quickly catch up on new features, improvements, and bug fixes — all in one place.




#
4. Plan & Subscription 

We’re rolling out subscription plans tailored to seller needs. These plans will unlock more tools and improve your overall experience with DodgePrint.

#
Enhancements
#
Full address now visible

Order Details now show the recipient’s full name and shipping address for Etsy and TikTok orders. You’ll see all the info you need for each order at a glance. This data is also included when using the Export button, making it easier to manage and fulfill orders.

#
Bug Fixes
#
Sales: “Awaiting Payment” Orders No Longer Counted

We’ve fixed an issue where orders marked as “Awaiting Payment” were incorrectly included in your sales totals. These orders are now properly excluded from sales data.

#
Listings: Product Description Editing Fixed

Resolved an issue where users were unable to enter in product descriptions during individual or bulk edits directly from shop listings. Description editing now works as expected.

#
Etsy: Personalization No Longer Removed After Edits

Fixed a bug that caused personalization details to be deleted after editing a product on Etsy. Personalization settings now remain intact after edits.

#
Product Catalog: Image Removal Issue Resolved

Resolved an issue where product images were being deleted after edits from the Product Catalog—even when users did not remove them. Images now stay in place after updates.

---

## Version 1.5.3 - July 16

#
New Features
#
1. Connect Supplier Accounts

You can now connect your Merchize and Printify accounts directly to DodgePrint. Once connected, you’re ready to start sending orders straight to your suppliers without extra steps.

Navigation path:  Fulfillment Center → Suppliers




#
2. Supplier Information Mapping

You can now map product details to ensure your orders are sent with the correct variant, size, and color information.

Navigation path:  Fulfillment Center → Orders




#
3. Upload Designs to Your Orders

You can now upload design files directly to your orders in DodgePrint. This makes it easier to prepare artwork for fulfillment.

Navigation path:  Fulfillment Center → Orders




#
4. Send Orders to Merchize and Printify

You can now send orders to Merchize and Printify after setting up supplier mapping and uploading designs. This simplifies the fulfillment process and helps you manage everything in one place.

---

## Version 1.5.2 - June 2025

#
New Features
#
Digital Downloads from Product List

You can now download digital files directly from the Product List. Whether you need a single file or multiple at once, accessing your digital assets is now faster and easier.

Multiple downnload




Single download




#
Enhancement
#
1. Export Etsy Transactions and Amazon Orders

You can now download Etsy finance transactions and Amazon order details directly from the platform — giving you easier access to important records for tracking and reporting.

Etsy finance transactions







Amazon orders







#
2. New Notification Page

We’ve introduced a dedicated Notifications page that shows all important updates related to your account activity and users. This helps you stay on top of key changes across your workspace.




#
3. Publish Etsy Listings Without Variants

You can now publish Etsy listings without needing to set up variants - perfect for digital products or simple physical items. Just add price and stock, and you’re good to go.




#
4. Top Products Now Visible on Dashboard

We’ve added a Top Products section to your dashboard so you can quickly see which items are performing best across your shops.







#
5. New Quick Tour for New Users

You can now see a quick tour after creating a DodgePrint account.
The tour walks you through the key steps to get started, so it’s easier to set up and begin using DodgePrint right away.




#
Bug Fixes
#
PNG Image Upload Fix

We fixed an issue where some .PNG files weren’t uploading correctly due to a file type error. Images should now display properly after upload.

---

## Version 1.5.1 - May 2025

#
New Features
#
1. Etsy Keyword Suggestions

We now automatically suggest relevant keywords from your product titles, optimized based on performance data - including Sales, Views, Favorers, and %CR. Use this to improve your tags and increase visibility across different time frames.

Keywords Suggestion

#
2. Create Products from Creative Fabrica

You can now connect with Creative Fabrica and import products directly into your shops. This streamlines your workflow and makes it easier to add high-quality designs to your listings.

#
Improvements
#
1. Improved Tag Analysis with Conversion Rate and New Sorting Options

We’ve updated the Tag Analysis tool with a cleaner layout and added Conversion Rate (%CR = Sales / Views) to help you better evaluate tag performance.
You can now sort by both percentage and values, making it easier to spot top-performing tags at a glance.




#
2. Product Performance on Dashboard

We’ve added product-level performance metrics directly to your dashboard. This gives you quicker access to actionable insights without needing to click through to individual listings.







#
Bug Fixes
#
1. Etsy Tracking Carrier Issue Resolved

We fixed an issue where tracking info sent to Etsy was missing the carrier name. Carrier details are now correctly included with all shipments.

#
2. Amazon Product Sync Fixed

We resolved a bug that caused product data to fail when syncing from connected Amazon shops. Your listings should now load and sync as expected.

---

## Version 1.5.0 - May 2025

#
New Features
#
1. User Summary Dashboard

You can now see a complete overview of all your shops - Etsy, TikTok, and Amazon in one place. The summary dashboard brings together key metrics so you can quickly understand how your business is performing across platforms.




#
2. Order Management for Amazon Shops

We added a feature that lets you manage orders directly within the platform for your Amazon shops. 




#
Enhancements
#
1. Shop Filter

You can now filter the shop list on your dashboard, making it easier to manage multiple shops and focus on what matters most.

#
2. Sorting by Value & % Change

We’ve added the ability to sort your data by both absolute values and percentage changes. This makes it easier to compare performance across products and shops.

#
3. Hide Columns 

You can now hide specific columns on the dashboard to create a cleaner, more focused workspace — tailored to how you work.







#
Improvements
#
1. Get Notified About New Orders and Shop Disconnections

You’ll now get real-time notifications when you receive a new order or if one of your shops gets disconnected. This helps you stay on top of important updates without needing to constantly check manually.




#
2. New Deploy Flow UI 

We’ve redesigned the deploy flow with a cleaner, more intuitive interface. Publishing products is now faster and easier, with fewer steps and a better user experience.










#
3. Keep Deleted Products for Easy Re-Publishing

When you delete a product, it will stay in the Deleted list with its original shop mapping. This allows you to re-publish it anytime or review where it was previously listed — giving you better visibility and control.




#
Bug Fixes
#
1. Timezone Calculation Fix

We fixed an issue where data was being miscalculated due to timezone differences. Your metrics are now accurate across all time zones.

#
2. Number Formatting on Dashboard

We fixed an issue where some numbers were not displaying correctly. All numeric values on the dashboard are now consistently and clearly formatted.

---

## Version 1.5.6 - December 17

#
New Features
#
1. Order Management : Added New Supplier Integrations (Printful, Printik and CustomCat)

We have added Printful, Printik, and CustomCat to our supplier integrations, allowing you to connect with these providers and submit orders directly from DodgePrint.




Navigation path: Fulfillment Center → Suppliers → Add Supplier

#
2. Smart Catalog : Introduced AI-Powered Product Creation

We have introduced AI Generator, enabling you to create products directly from designs or images with AI support.

This feature includes:

Template Library to quickly start from predefined product templates

AI Product Generator to generate products automatically




#
Enhancements
#
1. Order Detail (Shop Marketplaces): Added Refund Amount Display

We have added a Refund Amount field to the Order Detail view, providing clearer visibility into refunded values and making reconciliation easier for sellers.




#
2. Order Detail (Order Fulfillment): Added Shipping Label Submission to Suppliers

We have added support for sending shipping labels directly to suppliers from the Order Detail page. This enhancement enables more flexible fulfillment workflows when using pre-generated labels from selling platforms.




#
3. Supplier Mapping: Added Factory & Variant Mapping for BurgerPrints

We have added factory selection and corresponding product variants to Supplier Mapping for BurgerPrints, ensuring more accurate product configuration and order submission.




#
4. Bulk Product Listing: Improved Tag Management

We have improved tag management during bulk product edits.

You can now:

Add new tags

Remove or replace specific tags

This improvement helps maintain cleaner and more consistent tag data when managing products in bulk.




#
5. Shop List: Introduced a New UI with Cleaner Layout and Clearer Data

We have introduced a new Shop List interface with a cleaner layout and improved data presentation, making it easier to review and manage shop information at a glance.




#
6. Dashboard (Shop Level): Added Multi-Currency Support

We have added support for multiple currencies at the shop level. You can now view each shop’s data in its respective currency, providing more accurate insights when managing stores across different regions.

#
Bug fixes
#
1. Bulk Product Listing: Fixed Multiple Listing & Update Issues

We have fixed several issues affecting bulk listing and updates, including:

Timeout errors displaying “Something went wrong!”

Incorrect “Listing is being edited by another process” messages

Invalid product image errors during listing

Missing tags in DodgePrint after publishing to Etsy

Failed product publishing to Etsy

Bulk listing is now more stable and reliable.

#
2. Smart Catalog: Fixed Manual Product Creation Issue

We have fixed an issue where manually created products could remain stuck in Processing, preventing completion. 

Products are now created successfully after submission.

#
3. Description Template: Fixed Line Break Formatting

We have fixed an issue where line breaks were not applied correctly in product descriptions when using templates. 

Descriptions now display with proper formatting.

#
4. Order Management: Fixed Gearment Order Submission

We have fixed an issue caused by supplier-side changes that affected order submission to Gearment.

The system has been updated to ensure compatibility and successful order processing.

#
5. Dashboard: Fixed Reporting Data Issues

We have fixed multiple reporting issues, including:

Missing transaction data after reconnecting existing Etsy stores

Inconsistent order count and profit values

Dashboard data is now synchronized and displayed consistently.

---

## Version 1.5.5.4 - November 6

#
New Features
#
Order Management : Added New Supplier Integrations (MangoTee Prints, Pentifine)

We’ve added MangoTee Prints and Pentifine to the supplier list. You can now integrate with these suppliers and send orders directly from DodgePrint in just a few minutes.

Navigation path: Fulfillment Center → Suppliers → Add Supplier

📘 Setup Guide for MangoTee Prints Integration

📘 Setup Guide for Pentifine Integration

#
Enhancements
#
1. Fulfillment Order: Enhanced Filters

We've upgraded the filter system in Fulfillment Order to help you search and manage orders faster and more accurately.
Here’s what’s new:

New filters: You can now filter by Platform and Shop.

New search option: Try the Not Between filter to find more specific value ranges.

Fixes: The filters Is Empty and Is Not Empty now work properly.

Better visuals: Filter results are clearer and easier to understand.

#
2. Amazon Order Detail: Added Shipping Address Line

We’ve added the Address Line field for Amazon orders that are shipped by seller. 

→ This means you’ll now see the complete shipping address directly in DodgePrint — making it easier to process orders accurately and avoid delivery issues.










#
3. Order Detail: Updated Platform Shipping Method

You can now view the Platform Shipping method for each store directly in the order detail




#
4. Variation Template: Added Photos to Show Off Your Variations

We’ve added two key features to enhance how you manage product variations:

Image Index: Assign specific images to each variation using index numbers for better accuracy.

Custom Display Order: Easily reorder variation display while creating them – making your workflow more flexible and intuitive.




⚠️ Known Limitation: Currently, photos added to your variations only apply correctly during the first deployment. If you update them afterward, the images may not reflect as expected.

#
Bug fixes
#
Add Shops: Fixed Duplicate Entry Bug 

Fixed an issue where adding a new store would occasionally create duplicate entries. Now, each store will be added only once to the app, ensuring clean data and better store management.

---

## Version 1.5.5.3 - October 18

#
New Features
#
1. Fulfillment Order: Updated Etsy Tracking Sync Status (Manual & Auto)

You can now sync tracking numbers from Order Fulfillment directly to Etsy — either manually or automatically.
To make tracking status clearer, the system now visually indicates orders that:

✅ Success: Tracking numbers have been successfully synced to Etsy (manually or automatically).

⚠️ Failed: Tracking could not be sent to your shop due to an error.




#
2. Fulfillment Order: Updated Carrier for “No Carrier” Shipment

If your order tracking shows “No Carrier”, you can now manually select the correct shipping carrier.
This ensures Etsy receives accurate tracking details for smooth syncing.

Path: Order Fulfillment → Edit → Select Carrier → Save




#
3. Etsy Integration: Added Processing Profiles Management

You can now create and edit Processing Profiles directly in DodgePrint to set order fulfillment times — fully aligned with Etsy’s latest update, giving your listings more flexibility.

Made to Order: Created or personalized after purchase.

Ready to Ship: Already in stock and ready for immediate dispatch.

You can also set a default profile if preferred for faster listing setup.

Navigation path: Settings → Shop → Processing Profiles




#
Enhancements
#
1. Variation Template: Added Multi-Select and Exclude Options for Batch Edit

When using Batch Edit to create variations, you can now:

Select multiple options at once, or

Exclude specific options to fine-tune price and quantity settings.

This makes managing large variation groups much faster and more flexible.




#
2. Product Listing: Integrated Etsy Titles Suggestion

We’ve integrated Etsy’s AI-powered title suggestion tool. DodgePrint now automatically pulls title recommendations directly from Etsy data.
You can choose to edit or apply suggestions to a single listing or multiple listings at once.

💡 Note: These are Etsy-generated suggestions — not every listing will have optimized results.




#
3. Manual Create Product: Added Master Design Directly

You can now attach your Master Design while creating products — in two convenient ways:

Manual: Add the master design directly during product creation.

Import Excel: Include the master design when uploading via import file.

This update keeps your design data consistent and speeds up product setup.




#
4. Smart Catalog: Updated Linked Products & Tags to Designs

The Design module has been enhanced to help you organize and connect designs more efficiently.

Product Linking: Instantly view and manage which products use the same design, right inside the design editor.

Tags & Filters: Add tags to categorize designs and quickly filter or search by groups.

→ This makes it easier than ever to keep your design library neat and searchable.

---

## Version 1.5.5.2 - October 6

#
New Features
#
Order Management : Added New Supplier Integrations (Gearment, BurgerPrints)

We’ve added Gearment and BurgerPrints to the supplier list. You can now integrate with these suppliers and send orders directly from DodgePrint in just a few minutes.

Navigation path: Fulfillment Center → Suppliers → Add Supplier

📘 View the step-by-step guide




#
Bug fixes
#
1. Bulk Product Listing : Fixed readiness_state_id Issue

We updated handling for the processing profile requirement from Etsy. Creating and updating listings now works when a shop has exactly one processing profile.

Known limitations: Shops with zero, two, or more than two processing profiles may still encounter the readiness_state_id error. A broader fix is in progress.




#
2. Smart Catalog:  Fixed Videos Not Playing

Previously, some imported product videos couldn’t be played and didn’t show clear error messages. This issue has been resolved — all imported videos now play correctly, and any import errors will display clearly.




#
3. Smart Catalog:  Fixed Timeout Error Manual Product Creation

Creating multiple manual products at once used to trigger a timeout error. This issue has been fixed, and bulk manual product creation now runs smoothly.




#
4. Order Management:  Fixed Mismatched Order Statuses

In some cases, the order status and shipment status in the order detail didn’t match, causing confusion for sellers. This issue has been resolved — both statuses are now correctly aligned.

---

## Version 1.5.5.1 - September 23

#
New Features
#
1. Design Management: Design library created and linked with products

You can now save and organize all your designs in the new Design section. Designs can also be linked to products, making future order fulfillment faster and easier.

Navigation: Catalog Design → Design.
Why it helps: Keeps all your designs in one place and reduces repetitive work when managing products.

→ Learn how in this guide.

#
2. Order Fulfillment: Apply and save designs in orders

When fulfilling orders, you can now apply an existing design to order items or save a new design directly from the order for future use.
Why it helps: Speeds up the fulfillment process and lets you reuse designs without starting from scratch.
→  Learn how in this guide.

#
Enhancements
#
1. Order Status: Separated partial and full refunds

All refunded orders were previously grouped under “Refund” in the Orders → Listing tab. With this update:

Partial Refunded: shown for orders with partial refunds.

Refund (Fully Refunded): shown for orders fully refunded.




#
2. Fulfillment Order Detail: Added Origin SKU display

We added the seller’s original SKU (Origin SKU) in the Fulfillment Order Detail view. Orders can now be searched by product name or Origin SKU.




#
Bug fixes
#
1. Manual Product Creation: Fixed image upload size error

Previously, manual product creation failed when uploading large images. This has been fixed, and product creation now works smoothly with images up to 10MB.

#
2. Amazon Product Images: Fixed image update issue

The product image update feature for Amazon sometimes caused images to not display or fail to sync. This issue has been resolved, and product images now display and update correctly.

#
3. Amazon Product Quantity: Fixed inventory display mismatch 
#
4. Variant Template Import: Fixed template import error

Importing variant templates previously showed a “success” message without actually creating the template, or froze when importing large files. This has been fixed, and templates now import quickly and reliably.

---

## Version 1.5.5 - September 4

#
New Features
#
1. Google Sheets Integration: Added Google Sheets integration to send orders to suppliers

We added Google Sheets integration to Order Fulfillment. This update lets you configure and send orders to any supplier — even if they use their own system. You can send orders to a sheet in any template and they can import it on their side.

👉 This gives you the flexibility to work with a wide range of suppliers without limitations.

Navigation path: Fulfillment Center → Suppliers → Add Supplier

📘 View the step-by-step guide




#
2. Order Fulfillment: Enabled marking orders as fulfilled without sending to suppliers.

We added a feature that allows you to mark orders as fulfilled/completed without sending them to a supplier in DodgePrint.

This makes it easier to manage fulfillment and track order status, preventing orders from getting stuck in Pending.




📘 View the step-by-step guide




#
3. Order Fulfillment: Introduced automatic sync of tracking from suppliers and manual tracking to platforms

Order Fulfillment now supports automatic sync of tracking numbers from suppliers to DodgePrint.
You can also add tracking manually to orders and send it directly to your sales platforms.

#
Enhancements
#
Listing Performance: Introduced new UI for sorting and managing key metrics

We introduced a new UI that lets you sort and manage key product metrics the way you prefer, making it easier to evaluate listings and optimize performance effectively.




#
Bug fixes
#
1. Bulk Edit Listing: Fixed descriptions being cut off

Previously, product descriptions were not fully displayed in bulk edit.

This issue has been resolved, and descriptions now display correctly.

#
2. Order Fulfillment: Fixed incorrect prices in Order List

Previously, prices in the Order List were displayed incorrectly after submission to suppliers.

This issue has been resolved, and prices now display accurately.

---

## Version 1.5.4.2 - August 25

#
New Features
#
Export Center: Export All Orders from Any Shop or Platform

We’ve introduced Export Center, which allows you to export order data from all connected shops (Etsy, Amazon, TikTok Shop…) with optional filters to retrieve the data you need.

👉 Navigation: Go to Tools → Exports → Create Export → Select Filters → Create Export Request

#
Enhancements
#
Order Management: Removed Awaiting Payment (AP) Status

We’ve removed syncing and management for orders with the status Awaiting Payment (AP).

Reason:

AP status has limited operational value.

It caused discrepancies between the Dashboard and Order List because AP was not included in counts.

Customer counts were also affected.

This change makes numbers across Dashboard, Order List, and Customers consistent and easier to track.




#
Resource Management: Enabled Bulk User Access Control

We’ve added support for owners and managers to grant or remove access for multiple users at once on each shop, improving efficiency in user management.




#
Quotas: Updated Resource Quotas Calculation

We’ve updated the way resource quotas are calculated:

Products & Listings: Counted based on the total number of active items.

Orders:

Free plan: Quotas reset on the 1st of each month.

Paid plans + Licenses: Quotas reset according to the billing cycle.

#
Other Enhancements

Etsy: We’ve updated Platform Fee to include Transaction, Processing, Listing, Subscription, Set-Up, and Others.

Amazon: Added support for uploading tracking to Amazon orders.

Listing: Added filter for listings with video to improve management and search.

#
Bug fixes

Etsy Finances

Platform Fee numbers are now consistent between Dashboard and Finance.

Fixed missing data when exporting transaction files in Finance for Etsy shops.

Date range filter now applies correctly.




Others Bug Fixes:

Import Center: Fixed issue where failed import files could not be downloaded.




Pagination: Pagination in the Deployment tab and the See All option in notifications now work correctly.

Creative Fabrica Import: Fixed issue preventing product imports.

Description Template: Fixed issue when creating product descriptions via copy → paste.

---

## Version 1.5.4.1 - August 15

#
New Features
#
Workspace Resource Quota Management

We have introduceed the Workspace Resource Quota feature for each subscription plan, allowing you to easily monitor and manage usage limits.

Resource Quota Dashboard: Quickly view the number of Shops, Products, Orders, and Listings used versus your plan limit.




Over-limit Notifications: When Orders/Listings exceed your quota, the system will alert you and suggest an upgrade.

Billing & Subscription Details: Visually see your current plan, status, limits, and connected shops.







#
Enhancements
#
Separate Ads Fee from Platform Fees for Etsy Stats

We’ve made it easier to track your costs by separating Ads Fee from platform fees. We’ve also renamed Platform Fees to Total Fees for clarity.

See your total ad spend separate from other fees.

Analyze the share of ad costs to optimize your budget more effectively.

#
Bug fixes
#
1. Product Catalog Filter

We’ve fixed issues with the Has Digital and SKU filters:

Has Digital: Now works correctly with Yes and No options.

SKU: Now uses Listing SKU to accurately filter products in Products.

#
2. Listings Update

We’ve resolved issues with product publishing and price updates:

Fixed an issue where Physical without variants products couldn’t be published.

Fixed an issue where Digital product prices were not updated after making changes and deploying.

Fixed an issue where Descriptions were updated incorrectly when editing them after publishing.

#
3. Other bugs

Orders: Added detailed shipping status updates or orders.

Workspace: You can now rename your workspace directly in settings.

TikTok: Fixed an issue where Brand and Warehouse data from TikTok were not syncing.

Amazon: We now store product images in orders and mark deleted ASINs

---

## Version 1.5.4 - July 28

#
New Features
#
1. Sync Listings from Shops to Product Catalog

Listings are now automatically synced to your Product Catalog on DodgePrint after a shop is connected. The initial sync may take up to 15 minutes. After that, new listings will also be automatically synced.

Products are matched based on SKU:

If the SKU exists – the listing will be linked to the existing product in the Catalog, and the product will be updated with the associated shop.

If the SKU is blank or does not exist – a new product will be created in the Catalog and linked to the shop.

#
2. Manually Create Products in App

You can now create products directly within DodgePrint without needing to upload a CSV import file.

Navigation: Tools → Imports → Create Products

This update gives you more flexibility in managing your product catalog. You can either:

Upload image files from your device, or

Paste image URLs (supports .jpg, .png, .jpeg)

You can add products individually or create multiple products at once. This is ideal for sellers who want a faster way to add products without preparing files or working with third-party tools.




Refer to the step-by-step Product Creation Guide for full instructions on how to use this feature.

You can also import products directly from the Create Products page, allowing you to preview product information before completing the import.


#
3. “What’s New” now available in-app

We’ve added a “What’s New” section directly inside DodgePrint so you never miss an update. Quickly catch up on new features, improvements, and bug fixes — all in one place.




#
4. Plan & Subscription 

We’re rolling out subscription plans tailored to seller needs. These plans will unlock more tools and improve your overall experience with DodgePrint.

#
Enhancements
#
Full address now visible

Order Details now show the recipient’s full name and shipping address for Etsy and TikTok orders. You’ll see all the info you need for each order at a glance. This data is also included when using the Export button, making it easier to manage and fulfill orders.

#
Bug Fixes
#
Sales: “Awaiting Payment” Orders No Longer Counted

We’ve fixed an issue where orders marked as “Awaiting Payment” were incorrectly included in your sales totals. These orders are now properly excluded from sales data.

#
Listings: Product Description Editing Fixed

Resolved an issue where users were unable to enter in product descriptions during individual or bulk edits directly from shop listings. Description editing now works as expected.

#
Etsy: Personalization No Longer Removed After Edits

Fixed a bug that caused personalization details to be deleted after editing a product on Etsy. Personalization settings now remain intact after edits.

#
Product Catalog: Image Removal Issue Resolved

Resolved an issue where product images were being deleted after edits from the Product Catalog—even when users did not remove them. Images now stay in place after updates.

---

## Version 1.5.3 - July 16

#
New Features
#
1. Connect Supplier Accounts

You can now connect your Merchize and Printify accounts directly to DodgePrint. Once connected, you’re ready to start sending orders straight to your suppliers without extra steps.

Navigation path:  Fulfillment Center → Suppliers




#
2. Supplier Information Mapping

You can now map product details to ensure your orders are sent with the correct variant, size, and color information.

Navigation path:  Fulfillment Center → Orders




#
3. Upload Designs to Your Orders

You can now upload design files directly to your orders in DodgePrint. This makes it easier to prepare artwork for fulfillment.

Navigation path:  Fulfillment Center → Orders




#
4. Send Orders to Merchize and Printify

You can now send orders to Merchize and Printify after setting up supplier mapping and uploading designs. This simplifies the fulfillment process and helps you manage everything in one place.

---

## Version 1.5.2 - June 2025

#
New Features
#
Digital Downloads from Product List

You can now download digital files directly from the Product List. Whether you need a single file or multiple at once, accessing your digital assets is now faster and easier.

Multiple downnload




Single download




#
Enhancement
#
1. Export Etsy Transactions and Amazon Orders

You can now download Etsy finance transactions and Amazon order details directly from the platform — giving you easier access to important records for tracking and reporting.

Etsy finance transactions







Amazon orders







#
2. New Notification Page

We’ve introduced a dedicated Notifications page that shows all important updates related to your account activity and users. This helps you stay on top of key changes across your workspace.




#
3. Publish Etsy Listings Without Variants

You can now publish Etsy listings without needing to set up variants - perfect for digital products or simple physical items. Just add price and stock, and you’re good to go.




#
4. Top Products Now Visible on Dashboard

We’ve added a Top Products section to your dashboard so you can quickly see which items are performing best across your shops.







#
5. New Quick Tour for New Users

You can now see a quick tour after creating a DodgePrint account.
The tour walks you through the key steps to get started, so it’s easier to set up and begin using DodgePrint right away.




#
Bug Fixes
#
PNG Image Upload Fix

We fixed an issue where some .PNG files weren’t uploading correctly due to a file type error. Images should now display properly after upload.

---

## Version 1.5.1 - May 2025

#
New Features
#
1. Etsy Keyword Suggestions

We now automatically suggest relevant keywords from your product titles, optimized based on performance data - including Sales, Views, Favorers, and %CR. Use this to improve your tags and increase visibility across different time frames.

Keywords Suggestion

#
2. Create Products from Creative Fabrica

You can now connect with Creative Fabrica and import products directly into your shops. This streamlines your workflow and makes it easier to add high-quality designs to your listings.

#
Improvements
#
1. Improved Tag Analysis with Conversion Rate and New Sorting Options

We’ve updated the Tag Analysis tool with a cleaner layout and added Conversion Rate (%CR = Sales / Views) to help you better evaluate tag performance.
You can now sort by both percentage and values, making it easier to spot top-performing tags at a glance.




#
2. Product Performance on Dashboard

We’ve added product-level performance metrics directly to your dashboard. This gives you quicker access to actionable insights without needing to click through to individual listings.







#
Bug Fixes
#
1. Etsy Tracking Carrier Issue Resolved

We fixed an issue where tracking info sent to Etsy was missing the carrier name. Carrier details are now correctly included with all shipments.

#
2. Amazon Product Sync Fixed

We resolved a bug that caused product data to fail when syncing from connected Amazon shops. Your listings should now load and sync as expected.

---

## Version 1.5.0 - May 2025

#
New Features
#
1. User Summary Dashboard

You can now see a complete overview of all your shops - Etsy, TikTok, and Amazon in one place. The summary dashboard brings together key metrics so you can quickly understand how your business is performing across platforms.




#
2. Order Management for Amazon Shops

We added a feature that lets you manage orders directly within the platform for your Amazon shops. 




#
Enhancements
#
1. Shop Filter

You can now filter the shop list on your dashboard, making it easier to manage multiple shops and focus on what matters most.

#
2. Sorting by Value & % Change

We’ve added the ability to sort your data by both absolute values and percentage changes. This makes it easier to compare performance across products and shops.

#
3. Hide Columns 

You can now hide specific columns on the dashboard to create a cleaner, more focused workspace — tailored to how you work.







#
Improvements
#
1. Get Notified About New Orders and Shop Disconnections

You’ll now get real-time notifications when you receive a new order or if one of your shops gets disconnected. This helps you stay on top of important updates without needing to constantly check manually.




#
2. New Deploy Flow UI 

We’ve redesigned the deploy flow with a cleaner, more intuitive interface. Publishing products is now faster and easier, with fewer steps and a better user experience.










#
3. Keep Deleted Products for Easy Re-Publishing

When you delete a product, it will stay in the Deleted list with its original shop mapping. This allows you to re-publish it anytime or review where it was previously listed — giving you better visibility and control.




#
Bug Fixes
#
1. Timezone Calculation Fix

We fixed an issue where data was being miscalculated due to timezone differences. Your metrics are now accurate across all time zones.

#
2. Number Formatting on Dashboard

We fixed an issue where some numbers were not displaying correctly. All numeric values on the dashboard are now consistently and clearly formatted.

---

## April 2025

#
New Features
#
1. Workspace Management
#
1.1 Create Business Workspaces & Assign Roles

You can now create Business Workspaces to bring your team together in one place. 







Assign roles like Member or Manager to control what each person can do within the workspace.




#
1.2 Invite and Remove Members

You can invite others to join your workspace by sending an invitation. Once they accept, they become members with the roles you assign. 




You also have the option to remove members if needed.




#
1.3 Shared Resources Within Your Workspace

You can share resources such as Sites, Variations, Descriptions, Tags, and Templates with your team. You decide whether members have view-only or edit permissions.







#
1.4 Create User Groups

We made it easier to manage your teams by letting you create user groups within a workspace. This helps when sharing resources with multiple people at once.







#
2. Tag Analysis

You can now get real-time insights based on Etsy’s 30 million listings. Analyze KPIs like Number of Listings, Sales, Views, and Favorers for any tag or product. Compare data across different time frames including:

Today vs. Yesterday

Last 7 days vs. Previous 7 days

Last 14 days vs. Previous 14 days

Last 28 days vs. Previous 28 days

Individual Tags Analysis:







All Product Tags Analysis: 




#
3. Microsoft Account Login

You can now log in to DodgePrint using your Microsoft Account for faster and more secure access.

#
Bug Fixes
#
Deleting Products from Shops 

We fixed the issue that was preventing you from deleting products from a shop. You can now delete products without any problems.

---

## March 2025

#
New Features
#
1. Upload Tracking Numbers

You can now send tracking numbers from DodgePrint directly to your shops.




#
2. Auto-Sync Historical Orders on Shop Connection

Previously, only orders created after connecting a shop to DodgePrint were synced. Now, once a shop is authorized, all existing orders - including those created before the connection - will be automatically synced to DodgePrint.




#
Other Improvement
#
Improved Filtering with Filter V2

We've upgraded to Filter V2, offering more accurate and flexible filtering when processing and syncing orders.

---

## April 2025

#
New Features
#
1. Workspace Management
#
1.1 Create Business Workspaces & Assign Roles

You can now create Business Workspaces to bring your team together in one place. 







Assign roles like Member or Manager to control what each person can do within the workspace.




#
1.2 Invite and Remove Members

You can invite others to join your workspace by sending an invitation. Once they accept, they become members with the roles you assign. 




You also have the option to remove members if needed.




#
1.3 Shared Resources Within Your Workspace

You can share resources such as Sites, Variations, Descriptions, Tags, and Templates with your team. You decide whether members have view-only or edit permissions.







#
1.4 Create User Groups

We made it easier to manage your teams by letting you create user groups within a workspace. This helps when sharing resources with multiple people at once.







#
2. Tag Analysis

You can now get real-time insights based on Etsy’s 30 million listings. Analyze KPIs like Number of Listings, Sales, Views, and Favorers for any tag or product. Compare data across different time frames including:

Today vs. Yesterday

Last 7 days vs. Previous 7 days

Last 14 days vs. Previous 14 days

Last 28 days vs. Previous 28 days

Individual Tags Analysis:







All Product Tags Analysis: 




#
3. Microsoft Account Login

You can now log in to DodgePrint using your Microsoft Account for faster and more secure access.

#
Bug Fixes
#
Deleting Products from Shops 

We fixed the issue that was preventing you from deleting products from a shop. You can now delete products without any problems.

---

## March 2025

#
New Features
#
1. Upload Tracking Numbers

You can now send tracking numbers from DodgePrint directly to your shops.




#
2. Auto-Sync Historical Orders on Shop Connection

Previously, only orders created after connecting a shop to DodgePrint were synced. Now, once a shop is authorized, all existing orders - including those created before the connection - will be automatically synced to DodgePrint.




#
Other Improvement
#
Improved Filtering with Filter V2

We've upgraded to Filter V2, offering more accurate and flexible filtering when processing and syncing orders.

---

