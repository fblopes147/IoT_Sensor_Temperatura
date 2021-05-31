int sensorTMP36 = 0;

void setup(){
	Serial.begin(9600);
}

float fmap(long x, long in_min, long in_max, long out_min, long out_max) {
  return (float)(x - in_min) * (out_max - out_min) / (float)(in_max - in_min) + out_min;
}

void loop(){
  
  
  float temperatureC = fmap(((analogRead(sensorTMP36) - 20 ) * 3.04), 0, 1023, -40, 125);
  Serial.print(temperatureC);
  Serial.println(" graus C");
  
  delay(7000);
}