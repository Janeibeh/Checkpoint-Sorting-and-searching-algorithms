InsertionSort(arr);
    for i= 1 to arr.lenght -1
        key = arr[i]
        j = i-1
        while j>=0 and arr[j]> key
        arr[j+1] = arr[j]
        j= j - 1
        end while
        arr[j+1]=key
    end for
return arr
