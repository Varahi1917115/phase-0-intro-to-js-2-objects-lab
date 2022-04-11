const employee = {
name: 'Samarth',
streetAddress: '1262 NotMyReal St, Fishers, IN 60921'
};

function updateEmployeeWithKeyAndValue(employee, key, value)
{
    const emp = {...employee };
    emp[key] = value;

    return emp;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key)
{
    const empl = {...employee};
    delete empl[key]
    return empl
}
function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee[key]
    return employee
}