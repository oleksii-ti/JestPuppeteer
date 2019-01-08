declare -a processes
declare -a names

for tt in `seq 1 10`
do
	if (npm test); then
		RESULTS+=(""$test" "$shop" "$size" PASS")
    else
       RESULTS+=(""$test" "$shop" "$size" FAIL")
    fi
        
	# processes+=($!)
    # names+=(""$test" "$shop" "$size"")
done

# for i  in "${!processes[@]}"
# do
#     wait ${processes[i]}  && echo "${processes[i]} ${names[i]} PASSED" || echo "${processes[i]} ${names[i]} FAILED"
# done