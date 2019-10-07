(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conversations-conversations-module"],{

/***/ "./src/app/conversations/collab-messaging/collab-messaging.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/conversations/collab-messaging/collab-messaging.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol{\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  \n  ol li{\n    display:inline-block;\n    clear: both;\n    padding: 20px;\n    border-radius: 30px;\n    margin-bottom: 2px;\n    font-family: Helvetica, Arial, sans-serif;\n  }\n  \n  .him{\n    background: #eee;\n    float: left;\n  }\n  \n  .me{\n  \n    \n    float: right;\n    background:blue;\n    color: #fff;\n  }\n  \n  .him + .me{\n    border-bottom-right-radius: 5px;\n  }\n  \n  .me + .me{\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n  \n  .me:last-of-type {\n    border-bottom-right-radius: 30px;\n  }\n  \n  .message{\n    float: right;\n    color: #fff;\n  }\n  \n  .message{\n    border-bottom-right-radius: 5px;\n  }\n  \n  .message{\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n  \n  .message:last-of-type {\n    border-bottom-right-radius: 30px;\n  }\n  \n  .messa{\n    z-index: 0; \n      position: fixed; \n      display: flex;\n      align-self: flex-end; \n      bottom: 7%; \n      margin-bottom: 0px;\n      margin-left: 80%; \n  }\n  \n  /* Place the navbar at the bottom of the page, and make it stick */\n  \n  .navbar {\n    z-index: inherit 0;\n    background-color: #333;\n    position: fixed;\n    bottom: 5px;\n    max-width: 800px;\n  }\n  \n  .messageSender{\n      z-index: 5; \n      position: fixed; \n      display: flex;\n      align-self: flex-end; \n      bottom: 7%; \n      margin-bottom: 5px;\n      margin-left: 80%; \n      background-color: #0084ff\n  }\n  \n  .avatar {\n      vertical-align: middle;\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n    }\n  \n  .container-bottom {\n      float: right;\n      position: fixed;\n      bottom: 0;\n  }\n  \n  /* Chat containers */\n  \n  .container {\n    border: 2px solid #dedede;\n    background-color: #f1f1f1;\n    border-radius: 5px;\n    padding: 10px;\n    margin: 10px 0;\n  }\n  \n  /* Chat containers */\n  \n  .container2 {\n    border: 4px solid #dedede;\n    background-color: plum;\n    border-radius: 5px;\n    padding: 10px;\n    margin: 10px 0;\n    text-align: center;\n  }\n  \n  /* Darker chat container */\n  \n  .darker {\n    border-color: #ccc;\n    background-color: #ddd;\n  }\n  \n  /* Clear floats */\n  \n  .container::after {\n    content: \"\";\n    clear: both;\n    display: table;\n  }\n  \n  .right {\n    float: right;\n    margin-left: 20px;\n    margin-right:0;\n    font-size: 10px;\n  }\n  \n  .left {\n    float: left;\n    margin-right: 20px;\n    margin-left:0;\n    font-size: 10px;\n  }\n  \n  /* Style time text */\n  \n  .time-right {\n    float: right;\n    color: #aaa;\n  }\n  \n  /* Style time text */\n  \n  .time-left {\n    float: left;\n    color: #999;\n  }\n  \n  .mat-card {\n    max-width: 800px;\n    margin: auto;\n    padding: 0px;\n    height: 100%;\n    background: rgba(214, 212, 212, 0.048);\n    border: .4px solid rgb(59, 59, 59);\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n  \n  .mat-card-header {\n   \n    font-weight: bold;\n    display: inline;\n    \n  }\n  \n  .mat-card-title  {\n    margin-left: -16px;\n    margin-right: -16px;\n    margin-top: 0px;\n    color: rgba(0, 0, 0, 0.836);\n    background: rgba(34, 34, 34, 0.13);\n    padding: 5px;\n  }\n  \n  .mat-card-content {\n    margin: 0px;\n  }\n  \n  .mat-card>.mat-card-actions:last-child {\n    margin-bottom: 5px;\n   \n  }\n  \n  .mat-card-actions .mat-button, .mat-card-actions .mat-raised-button{\n    margin: 0px;\n    margin-left: 22px;\n  }\n  \n  .mat-expansion-panel {\n    background: rgba(255, 254, 254, 0.151);\n  }\n  \n  .requirements {\n    margin-left: 30px;\n    margin-right: 30px;\n    \n  }\n  \n  .overflow {\n    overflow:auto;\n    height:500px;\n  }\n  \n  .noBg {\n    background-color: rgba(214, 212, 212, 0.048);\n  }\n  \n  .form-container {\n    display: flex;\n    flex-direction: column; \n    padding: 20px;\n    \n  }\n  \n  .content .description{\n    font-size: 20px;\n    margin-left: 30px;\n    margin-right: 30px;\n  }\n  \n  .content .date,.location,.duration{\n    margin-left: 40px;\n    margin-right: 40px;\n  }\n  \n  .mat-card {\n    font-family: Georgia, 'Times New Roman', Times, serif;\n  }\n  \n  \n  \n  \n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVyc2F0aW9ucy9jb2xsYWItbWVzc2FnaW5nL2NvbGxhYi1tZXNzYWdpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBOzs7SUFHRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QiwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBT0E7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVDO0lBQ0MsNEJBQTRCO0lBQzVCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLFVBQVU7TUFDUixlQUFlO01BQ2YsYUFBYTtNQUNiLG9CQUFvQjtNQUNwQixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGdCQUFnQjtFQUNwQjs7RUFFQSxrRUFBa0U7O0VBQ2xFO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtNQUNJLFVBQVU7TUFDVixlQUFlO01BQ2YsYUFBYTtNQUNiLG9CQUFvQjtNQUNwQixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQjtFQUNKOztFQWdCRTtNQUNFLHNCQUFzQjtNQUN0QixXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFlBQVk7TUFDWixlQUFlO01BQ2YsU0FBUztFQUNiOztFQUdBLG9CQUFvQjs7RUFDcEI7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztFQUNoQjs7RUFDQSxvQkFBb0I7O0VBQ3BCO0lBQ0UseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0VBRUEsMEJBQTBCOztFQUMxQjtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0VBRUEsaUJBQWlCOztFQUNqQjtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0VBQ2pCOztFQUlBLG9CQUFvQjs7RUFDcEI7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBLG9CQUFvQjs7RUFDcEI7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxrQ0FBa0M7SUFDbEMseUVBQXlFO0VBQzNFOztFQUlBOztJQUVFLGlCQUFpQjtJQUNqQixlQUFlOztFQUVqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCOztFQUVwQjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCOztFQUVwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw0Q0FBNEM7RUFDOUM7O0VBR0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7O0VBRWY7O0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBS0E7SUFDRSxxREFBcUQ7RUFDdkQiLCJmaWxlIjoic3JjL2FwcC9jb252ZXJzYXRpb25zL2NvbGxhYi1tZXNzYWdpbmcvY29sbGFiLW1lc3NhZ2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsib2x7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgb2wgbGl7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLmhpbXtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIFxuICAubWV7XG4gIFxuICAgIFxuICAgIGZsb2F0OiByaWdodDtcbiAgICBiYWNrZ3JvdW5kOmJsdWU7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5oaW0gKyAubWV7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgfVxuICBcbiAgLm1lICsgLm1le1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgfVxuICBcbiAgLm1lOmxhc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIH1cbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgLm1lc3NhZ2V7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAubWVzc2FnZXtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAgLm1lc3NhZ2V7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAubWVzc2FnZTpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xuICB9XG4gIFxuICAubWVzc2F7XG4gICAgei1pbmRleDogMDsgXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kOyBcbiAgICAgIGJvdHRvbTogNyU7IFxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDgwJTsgXG4gIH1cbiAgXG4gIC8qIFBsYWNlIHRoZSBuYXZiYXIgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSwgYW5kIG1ha2UgaXQgc3RpY2sgKi9cbiAgLm5hdmJhciB7XG4gICAgei1pbmRleDogaW5oZXJpdCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gIH1cbiAgXG4gIC5tZXNzYWdlU2VuZGVye1xuICAgICAgei1pbmRleDogNTsgXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kOyBcbiAgICAgIGJvdHRvbTogNyU7IFxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDgwJTsgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NGZmXG4gIH1cbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgICAuYXZhdGFyIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRhaW5lci1ib3R0b20ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYm90dG9tOiAwO1xuICB9XG4gIFxuICBcbiAgLyogQ2hhdCBjb250YWluZXJzICovXG4gIC5jb250YWluZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZWRlZGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuICAvKiBDaGF0IGNvbnRhaW5lcnMgKi9cbiAgLmNvbnRhaW5lcjIge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICNkZWRlZGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGx1bTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC8qIERhcmtlciBjaGF0IGNvbnRhaW5lciAqL1xuICAuZGFya2VyIHtcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgfVxuICBcbiAgLyogQ2xlYXIgZmxvYXRzICovXG4gIC5jb250YWluZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG4gIFxuICAucmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6MDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmxlZnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDowO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICBcbiAgXG4gIFxuICAvKiBTdHlsZSB0aW1lIHRleHQgKi9cbiAgLnRpbWUtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogI2FhYTtcbiAgfVxuICBcbiAgLyogU3R5bGUgdGltZSB0ZXh0ICovXG4gIC50aW1lLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiAjOTk5O1xuICB9XG4gIC5tYXQtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxNCwgMjEyLCAyMTIsIDAuMDQ4KTtcbiAgICBib3JkZXI6IC40cHggc29saWQgcmdiKDU5LCA1OSwgNTkpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIH1cbiAgXG4gIFxuICBcbiAgLm1hdC1jYXJkLWhlYWRlciB7XG4gICBcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgXG4gIH1cbiAgXG4gIC5tYXQtY2FyZC10aXRsZSAge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgzNik7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzNCwgMzQsIDM0LCAwLjEzKTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgXG4gIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICBcbiAgLm1hdC1jYXJkPi5tYXQtY2FyZC1hY3Rpb25zOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgIFxuICB9XG4gIC5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtYnV0dG9uLCAubWF0LWNhcmQtYWN0aW9ucyAubWF0LXJhaXNlZC1idXR0b257XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XG4gIH1cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTQsIDI1NCwgMC4xNTEpO1xuICB9XG4gIFxuICAucmVxdWlyZW1lbnRzIHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgXG4gIH1cblxuICAub3ZlcmZsb3cge1xuICAgIG92ZXJmbG93OmF1dG87XG4gICAgaGVpZ2h0OjUwMHB4O1xuICB9XG5cbiAgLm5vQmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMTIsIDIxMiwgMC4wNDgpO1xuICB9XG4gIFxuICBcbiAgLmZvcm0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgXG4gIH1cbiAgLmNvbnRlbnQgLmRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIC5jb250ZW50IC5kYXRlLC5sb2NhdGlvbiwuZHVyYXRpb257XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICB9XG4gIFxuICBcbiAgXG4gIFxuICAubWF0LWNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICB9XG4gIFxuICBcbiAgXG4gIFxuICBcbiJdfQ== */"

/***/ }),

/***/ "./src/app/conversations/collab-messaging/collab-messaging.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/conversations/collab-messaging/collab-messaging.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n        <div class=\"noBg overflow\">\n                        <ol   *ngFor=\"let message of  messages\">\n                                \n                                        <div *ngIf=\"message.sender===user\">\n                                                <li class=\"me\">\n                                                        {{message.message}}<br>\n                                                        <span class=\"right\"> {{message.dispName}}</span>\n                                                        </li>\n                                        </div>\n                                        <div *ngIf=\"message.sender!==user\">\n                                                <li class=\"him\">   \n                                                        {{message.message}}<br>\n                                                        <span class=\"left\"> {{message.dispName}}</span>   \n                                                </li>\n                                        </div>\n                                </ol>\n        </div>\n                \n        \n\n<form #form = \"ngForm\" (ngSubmit) = \"sendMessage()\">\n        <div class=\"form-container\">\n                <mat-form-field>\n                        <input [(ngModel)] = \"messageInput\" name = \"message\" id = \"username\" type = \"text\" class = \"form-control\"\n                        #username = \"ngModel\" matInput placeholder = \"Message...\" required>\n                       \n                        <!--clear the input after hitting send button-->\n                        <a ng-click=\"messageInput = null\"></a>\n                </mat-form-field> \n                <button mat-raised-button color = \"primary\" ng-click=\"messageInput = null\" >Send</button>\n        </div>\n\n</form>\n        "

/***/ }),

/***/ "./src/app/conversations/collab-messaging/collab-messaging.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/conversations/collab-messaging/collab-messaging.component.ts ***!
  \******************************************************************************/
/*! exports provided: CollabMessagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollabMessagingComponent", function() { return CollabMessagingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _shared_dbAccess_conversation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/dbAccess/conversation.service */ "./src/app/shared/dbAccess/conversation.service.ts");
/* harmony import */ var src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var CollabMessagingComponent = /** @class */ (function () {
    function CollabMessagingComponent(userService, collabservice, conversation, router, userservie, activeRoute, formBuilder) {
        this.userService = userService;
        this.collabservice = collabservice;
        this.conversation = conversation;
        this.router = router;
        this.userservie = userservie;
        this.activeRoute = activeRoute;
        this.formBuilder = formBuilder;
    }
    CollabMessagingComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.userservie.getUserdetails().subscribe(function (data) {
                            _this.user = data.username;
                        });
                        //Will retrieve the 'username' parameter from the url if set.
                        return [4 /*yield*/, this.activeRoute.paramMap
                                .subscribe(function (params) {
                                _this.convoIdent = params.get('unameOrCollabId');
                                _this.getMessages();
                                setTimeout(function () {
                                    window.connect(localStorage.getItem('accessToken'));
                                }, 2000);
                                setInterval(function () { _this.loopPingCheck(); }, 1 * 1000);
                            })];
                    case 1:
                        //Will retrieve the 'username' parameter from the url if set.
                        _a.sent();
                        this.userservie.getUserdetails().subscribe(function (data) {
                            _this.user = data.username;
                            //console.log(this.user)
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CollabMessagingComponent.prototype.loopPingCheck = function () {
        if (window.PingReceived) {
            window.PingReceived = false;
            console.log("Angular Detected Ping Receive, getting new messages.");
            this.getMessages();
        }
        else {
            //console.log("Nope");
        }
    };
    CollabMessagingComponent.prototype.getMessages = function () {
        var _this = this;
        if (this.convoIdent.indexOf('@myhunter.cuny.edu') != -1) {
            this.conversation.getMessages(this.convoIdent, false).subscribe(function (data) {
                _this.messages = data[0].messages.reverse();
                console.log(_this.messages);
            });
        }
        else {
            this.conversation.getMessages(this.convoIdent, true).subscribe(function (data) {
                _this.messages = data[0].messages.reverse();
                console.log(_this.messages);
            });
        }
    };
    CollabMessagingComponent.prototype.sendMessage = function () {
        console.log("Sending message : " + this.messageInput);
        if (this.convoIdent.indexOf('@myhunter.cuny.edu') != -1) {
            this.conversation.sendPersonalMessage(this.messageInput, this.convoIdent).subscribe(function (data) {
                console.log(data);
                //this.getMessages();
            });
        }
        else {
            this.conversation.sendMessageToCollabGroup(this.messageInput, this.convoIdent).subscribe(function (data) {
                console.log(data);
                //this.getMessages();
            });
        }
    };
    CollabMessagingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-collab-messaging',
            template: __webpack_require__(/*! ./collab-messaging.component.html */ "./src/app/conversations/collab-messaging/collab-messaging.component.html"),
            styles: [__webpack_require__(/*! ./collab-messaging.component.css */ "./src/app/conversations/collab-messaging/collab-messaging.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__["CollabsService"],
            _shared_dbAccess_conversation_service__WEBPACK_IMPORTED_MODULE_2__["ConversationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], CollabMessagingComponent);
    return CollabMessagingComponent;
}());



/***/ }),

/***/ "./src/app/conversations/conversations-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/conversations/conversations-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collab-messaging/collab-messaging.component */ "./src/app/conversations/collab-messaging/collab-messaging.component.ts");
/* harmony import */ var _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messenger/messenger.component */ "./src/app/conversations/messenger/messenger.component.ts");





var routes = [
    {
        //Path to UserPageComponent, which places the parameter ':username' in the path
        //':username' will be used to retrieve that specific users data 
        path: 'message/:unameOrCollabId',
        component: _collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_3__["CollabMessagingComponent"]
    },
    {
        path: '',
        component: _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_4__["MessengerComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/conversations/conversations.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/conversations/conversations.module.ts ***!
  \*******************************************************/
/*! exports provided: ConversationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationsModule", function() { return ConversationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _conversations_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversations-routing.module */ "./src/app/conversations/conversations-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collab-messaging/collab-messaging.component */ "./src/app/conversations/collab-messaging/collab-messaging.component.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./messenger/messenger.component */ "./src/app/conversations/messenger/messenger.component.ts");














//Material Components










var ConversationsModule = /** @class */ (function () {
    function ConversationsModule() {
    }
    ConversationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_4__["CollabMessagingComponent"],
                _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_23__["MessengerComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _conversations_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"],
                //Angular Material
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollDispatchModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlNativeDateTimeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ]
        })
    ], ConversationsModule);
    return ConversationsModule;
}());



/***/ }),

/***/ "./src/app/conversations/messenger/messenger.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/conversations/messenger/messenger.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .avatar {\n    vertical-align: middle;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n  }\n  .mat-card-avatar {\n    background-image: url('/assets/userPhoto.png');\n    vertical-align: middle;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n  .container-bottom {\n    float: right;\n    position: fixed;\n    bottom: 0;\n}\n  /* Chat containers */\n  .container {\n  border: 2px solid #dedede;\n  background-color: #f1f1f1;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0;\n}\n  /* Chat containers */\n  .container2 {\n  border: 4px solid #dedede;\n  background-color: plum;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0;\n  text-align: center;\n}\n  /* Darker chat container */\n  .darker {\n  border-color: #ccc;\n  background-color: #ddd;\n}\n  /* Clear floats */\n  .container::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n  .right {\n  float: right;\n  margin-left: 20px;\n  margin-right:0;\n}\n  .message{\n  z-index: 5; \n    position: fixed; \n    display: flex;\n    align-self: flex-end; \n    bottom: 7%; \n    margin-bottom: 5px;\n    margin-left: 80%; \n}\n  /* Style time text */\n  .time-right {\n  float: right;\n  color: #aaa;\n}\n  /* Style time text */\n  .time-left {\n  float: left;\n  color: #999;\n}\n  .mat-card {\n  max-width: 800px;\n  margin: auto;\n  padding: 0px;\n  height: 100%;\n  background: rgba(214, 212, 212, 0.048);\n  background-repeat: repeat-x;\n  background-repeat: repeat-y;\n}\n  .mat-card2 {\n  max-width: 600px;\n  margin: auto;\n  padding: 0px;\n  height: 100%;\n  background: rgba(214, 212, 212, 0.048);\n  border: .4px solid rgb(59, 59, 59);\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n  .mat-card-header {\n \n  font-weight: bold;\n  display: inline;\n  \n}\n  .mat-card-title  {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0px;\n  color: rgba(0, 0, 0, 0.836);\n  background: rgba(34, 34, 34, 0.13);\n  padding: 5px;\n}\n  .mat-card-content {\n  margin: 0px;\n}\n  .mat-card>.mat-card-actions:last-child {\n  margin-bottom: 5px;\n \n}\n  .mat-card-actions .mat-button, .mat-card-actions .mat-raised-button{\n  margin: 0px;\n  margin-left: 22px;\n}\n  .mat-expansion-panel {\n  background: rgba(255, 254, 254, 0.151);\n}\n  .requirements {\n  margin-left: 30px;\n  margin-right: 30px;\n  \n}\n  .content .description{\n  font-size: 20px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n  .content .date,.location,.duration{\n  margin-left: 40px;\n  margin-right: 40px;\n}\n  .table{\n  width: 100%;\n  height: 100%;\n  overflow-x:  auto;\n  overflow-y:  auto;\n}\n  .mat-card {\n  font-family: Georgia, 'Times New Roman', Times, serif;\n}\n  .mat-list{\n  height: 100%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVyc2F0aW9ucy9tZXNzZW5nZXIvbWVzc2VuZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSw4Q0FBOEM7SUFDOUMsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0VBRUU7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFNBQVM7QUFDYjtFQUdBLG9CQUFvQjtFQUNwQjtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0VBQ0Esb0JBQW9CO0VBQ3BCO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7RUFFQSwwQkFBMEI7RUFDMUI7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0VBRUEsaUJBQWlCO0VBQ2pCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0VBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7RUFFQTtFQUNFLFVBQVU7SUFDUixlQUFlO0lBQ2YsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtFQUlBLG9CQUFvQjtFQUNwQjtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7RUFFQSxvQkFBb0I7RUFDcEI7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiO0VBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLDJCQUEyQjtFQUMzQiwyQkFBMkI7QUFDN0I7RUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsa0NBQWtDO0VBQ2xDLHlFQUF5RTtBQUMzRTtFQUVBOztFQUVFLGlCQUFpQjtFQUNqQixlQUFlOztBQUVqQjtFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7RUFFQTtFQUNFLFdBQVc7QUFDYjtFQUVBO0VBQ0Usa0JBQWtCOztBQUVwQjtFQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtFQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0VBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCOztBQUVwQjtFQUlBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7RUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtFQUVBO0VBQ0UscURBQXFEO0FBQ3ZEO0VBR0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb252ZXJzYXRpb25zL21lc3Nlbmdlci9tZXNzZW5nZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuYXZhdGFyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLm1hdC1jYXJkLWF2YXRhciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3VzZXJQaG90by5wbmcnKTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59IFxuXG4gIC5jb250YWluZXItYm90dG9tIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbn1cblxuXG4vKiBDaGF0IGNvbnRhaW5lcnMgKi9cbi5jb250YWluZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGVkZWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLyogQ2hhdCBjb250YWluZXJzICovXG4uY29udGFpbmVyMiB7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNkZWRlZGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHBsdW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogRGFya2VyIGNoYXQgY29udGFpbmVyICovXG4uZGFya2VyIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4vKiBDbGVhciBmbG9hdHMgKi9cbi5jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4ucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6MDtcbn1cblxuLm1lc3NhZ2V7XG4gIHotaW5kZXg6IDU7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgXG4gICAgYm90dG9tOiA3JTsgXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7IFxufVxuXG5cblxuLyogU3R5bGUgdGltZSB0ZXh0ICovXG4udGltZS1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi8qIFN0eWxlIHRpbWUgdGV4dCAqL1xuLnRpbWUtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogIzk5OTtcbn1cbi5tYXQtY2FyZCB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjE0LCAyMTIsIDIxMiwgMC4wNDgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbn1cblxuLm1hdC1jYXJkMiB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjE0LCAyMTIsIDIxMiwgMC4wNDgpO1xuICBib3JkZXI6IC40cHggc29saWQgcmdiKDU5LCA1OSwgNTkpO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4ubWF0LWNhcmQtaGVhZGVyIHtcbiBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgXG59XG5cbi5tYXQtY2FyZC10aXRsZSAge1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44MzYpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIDAuMTMpO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5tYXQtY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5tYXQtY2FyZD4ubWF0LWNhcmQtYWN0aW9uczpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuIFxufVxuLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1idXR0b24sIC5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbntcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuMTUxKTtcbn1cblxuLnJlcXVpcmVtZW50cyB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIFxufVxuXG5cblxuLmNvbnRlbnQgLmRlc2NyaXB0aW9ue1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi5jb250ZW50IC5kYXRlLC5sb2NhdGlvbiwuZHVyYXRpb257XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5cblxuLnRhYmxle1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiAgYXV0bztcbiAgb3ZlcmZsb3cteTogIGF1dG87XG59XG5cbi5tYXQtY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG5cbi5tYXQtbGlzdHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/conversations/messenger/messenger.component.html":
/*!******************************************************************!*\
  !*** ./src/app/conversations/messenger/messenger.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <div class = \"list-viewer-wrapper\">\n    <div class=\"list-header-title\">\n    </div>\n\n    <mat-list style=\"padding:0\" *ngIf = \"convos\">\n        <ng-container *ngIf = \"convos.length == 0\">\n            <mat-divider></mat-divider>\n                <mat-list-item>\n                    <span class = \"mat-body center\">Hey, looks like you have no conversations ... you can message users through their profile page.</span>\n                </mat-list-item>\n        </ng-container>\n        <ng-container *ngFor = \"let convo of convos\">\n            <mat-divider></mat-divider>\n            <mat-list-item (click)=\"gotoConvo(convo)\">\n                <span class = \"mat-body center\">{{ convo.otherUser != null ? getUserDispname(convo.otherUser) : convo.title }}</span>\n            \n            </mat-list-item>\n            \n        </ng-container>\n      </mat-list>\n</div>"

/***/ }),

/***/ "./src/app/conversations/messenger/messenger.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/conversations/messenger/messenger.component.ts ***!
  \****************************************************************/
/*! exports provided: MessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerComponent", function() { return MessengerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MessengerComponent = /** @class */ (function () {
    function MessengerComponent(userservice, router) {
        this.userservice = userservice;
        this.router = router;
        this.user = null;
        this.displayNames = new Map();
    }
    MessengerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getUserdetails().subscribe(function (data) {
            _this.user = data.username;
        });
        this.userservice.getConversations().subscribe(function (convers) { return _this.convos = convers; });
    };
    MessengerComponent.prototype.gotoConvo = function (convo) {
        if (convo.otherUser) {
            console.log("Goto personal convo: " + convo.otherUser);
            this.router.navigate(['/conversations/message/', convo.otherUser]);
        }
        else {
            console.log("Goto collab convo: " + convo._id.$oid);
            this.router.navigate(['/conversations/message/', convo._id.$oid]);
        }
    };
    MessengerComponent.prototype.getUserDispname = function (username) {
        var _this = this;
        if (this.displayNames.has(username)) {
            return this.displayNames.get(username);
        }
        else {
            this.displayNames.set(username, "");
            setTimeout(function () {
                _this.userservice.getMemberdetails(username).subscribe(function (data) {
                    //console.log(data);
                    _this.displayNames.set(username, data['name']);
                });
            });
            return this.displayNames.get(username);
        }
    };
    MessengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-messenger',
            template: __webpack_require__(/*! ./messenger.component.html */ "./src/app/conversations/messenger/messenger.component.html"),
            styles: [__webpack_require__(/*! ./messenger.component.css */ "./src/app/conversations/messenger/messenger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MessengerComponent);
    return MessengerComponent;
}());



/***/ })

}]);
//# sourceMappingURL=conversations-conversations-module.js.map