<template>
    <div class="center">
        <div v-if="auth===null">
            <h2>Login in</h2>
        </div>
        <div v-if="auth===null">
            <div class="spinner-container">
                <div class="spinner"></div>
            </div>
        </div>
        <div v-if="auth===false">
            <img src="../assets/cross.png" alt="cross" />
        </div>
    </div>
</template>

<script setup>
import FingerprintJS from '@fingerprintjs/fingerprintjs';   
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';

const router = useRouter();  // initialize router
const store = useStore();

let id=null;

async function getauth(){
    try {
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        
        id= result.visitorId;
    } catch (err) {
        console.error("FingerprintJS Error:", err);
    }

    if(id!=null){
    const response = await fetch(process.env.VUE_APP_API_URL+"auth?auth="+id,{
    headers: {
       'ngrok-skip-browser-warning': 'true'
    }
    })
    const data = await response.json();
    store.commit('setAuth', data.auth);
        if( data.auth===true){
            store.dispatch("connectToWebSocket");
            router.replace('/day')
            setTimeout(()=>{
                store.commit('setAuth', null);
                router.replace('/');
            },1800000)
        }
    }
}

getauth();

const auth = computed(() => store.getters.getAuth);

</script>

<style scoped>
        .center{
            height: calc(100vh - 20px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        h2 {
         white-space: nowrap; /* Prevents text from wrapping to a new line */
         overflow-wrap: normal; /* Default value, prevents unnecessary breaks */
         word-break: normal; /* Ensures words do not break */
        }

        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #2c3e50;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        /* Animation */
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

</style>