#include "WiFi.h"
#include "SPIFFS.h"
#include "ESPAsyncWebServer.h"
#include <Stepper.h>  
const char* ssid = "pass";
const char* password =  "pass";
#define IN1 14
#define IN2 12
#define IN3 26
#define IN4 27 
const int stepsPerRevolution = 2048;
AsyncWebServer server(80);
Stepper myStepper = Stepper(stepsPerRevolution, IN1, IN3, IN2, IN4);  
void setup(){
  Serial.begin(115200);
   myStepper.setSpeed(10);
  if(!SPIFFS.begin()){
        Serial.println("An Error has occurred while mounting SPIFFS");
        return;
  }
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }
  
  Serial.println(WiFi.localIP());
  
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(SPIFFS, "/index.html", "text/html");
    Serial.println("clockwise");
    myStepper.step(stepsPerRevolution);
  });
  
  server.begin();
}
  
void loop(){}
