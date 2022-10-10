<script>
    import {ethers} from "ethers"

    export default{
        methods:{
            hash() {
                console.log(
                    ethers.utils.keccak256(
                        ethers.utils.toUtf8Bytes("aurora")
                        )
                    )
            }
        }

    }

</script>
<template>
    <div>
        <h1>Petro</h1>
        <button @click="hash">hash</button>
    </div>
</template>