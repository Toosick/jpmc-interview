# Product List Components
* search_results
* category_list
    * category
* department_sorter
    * Data: clothing, computers, ...
    * Actions: open, close
    * Configuration
        * choose_label
        * sort_label
        * down_arrow_url
        * departments_label
* past_order
* advertisement
* related_search
* product_list
    * product_list_item
        * product_buy_info
        * product_reviews
        
# Product Details Components
* header_navigation
* advertisement
* header_bar
    * shop_by
    * search_panel
        * search_by
    * account_dropdown
    * cart_dropdown
    * wish_list_dropdown
* product_breadcrumbs
    * product_breakcrumb
* social_share
* product_add_to
    * product_add_to_cart
    * product_single_sign_on
    * product_add_to_wish_list
* product_other_sellers_product_list
    * seller_product_list_item
* product_image_viewer
    * Data: img_1_url, img_2_url, img_1_thumbnail_url, img_2_thumbnail_url
    * Actions: mouse_in (zoom), change_img, mouse_out(zoom), mouse_move (zoom)
    * Configuration
        * img_dimensions
        * roll_over_label
        * zoom_dimensions
        * zoom_position
        * zoom_window_percentage
        * thumbnail_dimensions
* product_info
* product_buy_info
    * product_shipping
* product_types
* product_bullet_point_list
    * product_bullet_point
* product_other_sellers_info
* similar_product_deals

# API Design
Assuming that driving directions, services, and hours is handled with the Bing Javascript Maps API
### Resources
* Search
    * GET
        * Input: query, page, count
        * Output
            * Date Type: JSON
            ``` 
               {
                 "meta": {
                   "page": 1,
                   "total": 199
                 },
                 "banks": [
                   {
                     "bank_id": "1",
                     "address": "770 Polaris Pkwy",
                     "city": "Lewis Center",
                     "state": "OH",
                     "postal": "43035",
                     "center": "Speedway",
                     "phone": "614-217-6284",
                     "hours": {
                       "Monday": "9-5 PM",
                       "Tuesday": "9-5 PM",
                       "Wednesday": "9-5 PM",
                       "Thursday": "9-5 PM",
                       "Friday": "9-5 PM",
                       "Saturday": "12-5 PM",
                       "Sunday": "2-5 PM"
                     },
                     "services": ["atm", "personal_banking", "business_banking", "credit_cards", "loans"],
                     "latitude": "40.151197",
                     "longitude": "-82.997971"
                   }  
                 ]
               }
* Bank
    * Definition
        * bank_id
        * address
        * city
        * state
        * postal
        * center
        * phone
        * hours
        * services
        * latitude
        * longitude

