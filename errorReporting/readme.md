# Error reporting

This micro service checks if each lesson meets the business rules. If not it will give a warning per lesson.

**Rules**
[] does the lesson meet the availability of the teachers?
[] does the lesson overlaps with other lessons (teachers and classes)
[] does all the classes have the same lessons or is 
[] compared to the implemented schedule of the HZ where are errors

## Route
- /api/v1/rules/teachers/availability
- /api/v1/rules/teachers/overlap
- /api/v1/rules/schedule/alllessons
- /api/v1/rules/schedule/compare

POST

```
{

}
```