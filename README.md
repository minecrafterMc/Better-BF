
# BF++

## My own brainf*ck extention called BF++.

**New commands:**
* "~": logs the data storage into the console
* ":": outputs the data at the pointer as an integer
* "#": saves data at the pointer to temporary storage (it always overrides the previous value)
* "$": sets data at the pointer to data from temporary storage
* "@": works like "+" but it goes back to 0 if the value is outside the ascii table
**Modified commands:**
* "+": it now has no value cap and can go up to the integer limit
* "-": when it substracts from 0, it goes to the value corresponding to the top of the ascii table



**Note: the ascii table is diffrent than in regular BF. Type "console.log(ascii)" to see the new table**