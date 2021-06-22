## Testes Automatizados

# Exercício 1

a)  
````
export interface User {
        name: string
        balance: number
    }
````
b)  
````
export function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}
````
----------

# Exercício 2

a)  
````
test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }

        const result = performPurchase(user, 30)
        
        expect(result).toEqual({
            name: "Astrodev",
            balance: 70
        })
        
    })
````

b)  
````
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})
````

c)  
````
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 40
	}

	const result = performPurchase(user, 60)
	
	expect(result).not.toBeDefined()
})
````

--------

# Desafios

# Exercício 3

c) Analisar todos os casos possíveis.

-------

# EXERCÍCIO 04

a) 
````
test("1 brazilian allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    }

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed).toEqual(["Astrodev"]);
  })
````

b) 
````
test("1 american allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    }

    const result = verifyAge(casino, [brazilian]);
    expect(result.americans.allowed).toEqual(["Astrodev"])
  })
````


c)  
````
test("No one allowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    }

    const american: User = {
      name: "Astrodev EUA",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    }

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ])
    expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.unallowed).toEqual([
      "Astrodev EUA",
      "Astrodev EUA",
    ])
  })
````

d) 
````
test("2 american allowed and 2 brazilians unallowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    }

    const american: User = {
      name: "Astrodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    }

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ])
    expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
  })
````
-------

# EXERCÍCIO 05

a) 
````
test("1 brazilian allowed", () => {

    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    }

    const result = verifyAge(casino, [brazilian])
    expect(result.brazilians.allowed.length).toBeGreaterThan(0)
    expect(result.brazilians.allowed.length).toBeLessThan(2)
  })
````

b) 
````
test("1 american allowed", () => {

    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    }

    const result = verifyAge(casino, [brazilian])
    expect(result.americans.unallowed.length).toBe(0)
  })
````

c) 
````
test("No one allowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    }

    const american: User = {
      name: "Astrodev EUA",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    }

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ])

    expect(result.brazilians.unallowed).toContain("Astrodev BR")
    expect(result.americans.unallowed).toContain("Astrodev EUA")
  })
````

d)
````
test("2 american allowed and 2 brazilians unallowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    }

    const american: User = {
      name: "Astrodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    }

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ])

    expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
    expect(result.americans.unallowed.length).toBeLessThan(1)
    expect(result.americans.allowed.length).toBe(2)
  })
````
----
