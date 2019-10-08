Scenario: Deleting Student 
Given I am at the students page
Given I can see a student with CPF "755" in the students list
When I try to delete the student with CPF "755"
Then I cannot see a student with CPF "755" in the students list