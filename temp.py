charalist = ["Kako","Tsubasa","Ima","Nozomi","Moko","Yugamu","Takemaru","Shouma","Gaku","Hiruko"]
l=0
for x in charalist:
    l +=1
    print(f"{x} is a person. The charanum of {x} is {l}. The alive of {x} is true. Understand"+f' "Eito {l}" and "Eito #{l}" as {x}. {x} is privately-named. Understand "Eito" as {x} when multipeople is false. {x} is an Eitoling. {x}here is a truth state that varies. {x}here is false.')
    
for x in charalist:
    print(f"if the location of {x} is the location of the player, now {x}here is true;")
    print(f"else, now {x}here is false;")