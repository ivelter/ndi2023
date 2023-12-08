"use client"
/* eslint-disable react/no-unescaped-entities */
import base from "./movaicode.module.scss"


export default function MovaiCode() {
    let temperature = 2.7;
    console.log(temperature)
    let tauxdecarbone = 100;
    tauxdecarbone *= tauxdecarbone;
    let jeDecideDeArreterLaBoucle = false;
    let jeFaisCeQueJeVeux = true;
    let rienNeMarette = false;
    let caNeFinisJamais = false;
    let jaimeLeRandom = 0;
    let elasCaseDepart = false;
    let coeffJsp = 0;
    let laFinPeuEtre = false;
    let laFinPourDeVrai = 5;
    while (!jeDecideDeArreterLaBoucle) {
        console.log(temperature)
        if (temperature == 1) {
            jeDecideDeArreterLaBoucle = true;
        }
        else {
            temperature *= temperature;
            jaimeLeRandom = Math.floor(Math.random() * 101) + 1;
            if (jeFaisCeQueJeVeux) {
                temperature += (tauxdecarbone * tauxdecarbone) - 1;
                rienNeMarette = true;
                caNeFinisJamais = true;
            }
            if (rienNeMarette == 1) {
                temperature -= Math.PI * tauxdecarbone * tauxdecarbone
                rienNeMarette = false;
                caNeFinisJamais = false;
                jeFaisCeQueJeVeux = false;
                rienNeMarette = Math.floor(Math.random() * 51) + 1;
                if (jaimeLeRandom >= 800) {
                    tauxdecarbone *= tauxdecarbone*rienNeMarette;
                }
                else {
                    caNeFinisJamais = true;
                }
                if (caNeFinisJamais) {
                    temperature *= -1;
                    caNeFinisJamais = false;
                    jeFaisCeQueJeVeux = true;
                }
                else {
                    elasCaseDepart = true;
                    coeffJsp = (Math.floor(Math.random() + 1) * tauxdecarbone);
                    tauxdecarbone = temperature - coeffJsp - tauxdecarbone;
                }
            if (Math.floor(Math.random() * 10) + 1 == 1) {
                temperature = Math.pow(temperature);
            }
            }
            if (temperature >= 0) {
                laFinPeuEtre = true;
                tauxdecarbone = Math.floor(Math.random() * 101) + 1 - coeffJsp;
            }
            if (laFinPeuEtre) {
                temperature = 2;
                tauxdecarbone = 100;
                jeFaisCeQueJeVeux = true;
                laFinPeuEtre = false;
                laFinPourDeVrai = Math.floor(Math.random() * 3) + 1;
                if (laFinPourDeVrai == 1) {
                    temperature = 1;
                }
            }
        }
    }
    temperature *= 2;
  return <>
<div class="bg-black w-96 h-96">
  <div class="bg-green-700 w-8 h-8 absolute top-48 left-36">
    <div class="bg-green-700 w-8 h-8 rotate-45">
    </div>
  </div>
  <div class="bg-green-700 w-8 h-8 absolute top-44 left-32">
    <div class="bg-green-700 w-8 h-8 rotate-45">
    </div>
  </div>
  <div class="bg-green-700 w-8 h-8 absolute top-40 left-28">
    <div class="bg-green-700 w-8 h-8 rotate-45">
    </div>
  </div>
  <div class="bg-green-700 w-8 h-8 absolute top-36 left-24">
    <div class="bg-green-700 w-8 h-8 rotate-45">
    </div>
  </div>
  <div class="bg-green-700 w-8 h-8 absolute top-28 left-40">
    <div class="bg-green-700 w-8 h-8 rotate-45">
    </div>
  </div>
  
  <div class="bg-red-950 w-8 h-8 absolute top-80 left-44">
    <div class="bg-red-950 w-16 h-2 rotate-12 relative top-8 left-6">
      <div class="bg-red-950 w-4 h-1 -rotate-45 relative top-3 left-4">
      </div>
      <div class="bg-red-950 w-4 h-1 rotate-90 relative top-2 left-9">
      </div>
      <div class="bg-red-950 w-4 h-1 rotate-45 relative top-1 left-14">
      </div>
      <div class="bg-red-950 w-4 h-1 rotate-12 relative bottom-2 left-16">
      </div>
    </div>
    <div class="bg-red-950 w-16 h-2 -rotate-12 relative top-6 right-14">
      <div class="bg-red-950 w-4 h-1 -rotate-45 relative top-3 right-2">
      </div>
      <div class="bg-red-950 w-4 h-1 rotate-90 relative top-2 left-5">
      </div>
      <div class="bg-red-950 w-4 h-1 rotate-45 relative top-1 left-12">
      </div>
      <div class="bg-red-950 w-4 h-1 -rotate-12 relative bottom-2 right-4">
      </div>
    </div>
  </div>
  <div class="bg-red-950 w-8 h-8 absolute top-72 left-44">
    <div class="bg-red-950 w-24 h-2 -rotate-45">
      <div class="bg-red-950 w-4 h-1 relative left-20 top-3 rotate-90">
      </div>
    </div>
  </div>
  <div class="bg-red-950 w-8 h-8 absolute top-64 left-44">
    <div class="bg-red-950 w-24 h-2 rotate-45 relative right-16 bottom-4">
    </div>
  </div>
  <div class="bg-red-950 w-8 h-8 absolute top-56 left-44">
  </div>
  <div class="bg-red-950 w-8 h-8 absolute top-48 left-44">
    <div class="bg-red-950 w-20 h-4 rotate-45 relative right-14 bottom-7">
      <div class="bg-red-950 w-20 h-4 -rotate-90 relative bottom-12 left-8">
      <div class="bg-green-700 w-8 h-8 relative bottom-16 right-0">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-28 right-5">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-28 right-5">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-2 right-5">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-36 left-4">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-48 left-11">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-48 left-11">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-64 left-3">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
    </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-20 left-20">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-20 left-20">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-20 left-20">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-20 left-20">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-20 left-20">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-32 left-12">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-32 left-12">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-48 left-4">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-48 left-4">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-60 right-4">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-72 right-4">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-96 left-12">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
      <div class="bg-green-700 w-8 h-8 relative bottom-80 left-0">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
      </div>
    </div>
  </div>
</div>

<p class="absolute left-1/3 top-3/4">quelques degrés de plus, ça change tout</p>
<div class="absolute top-52 left-1/3">
  {temperature}
</div>
<div class="absolute top-2/3 left-1/3">
<p>degrés de plus entre 1990 et 2020, c'est ce qu'il faut pour déclancher des catastrophes majeures</p>
</div>

<div class="absolute left-1/2 top-0" >
    <div class="bg-black w-96 h-96">
    <div class="bg-green-700 w-8 h-8 absolute top-48 left-36">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
    </div>
    <div class="bg-green-700 w-8 h-8 absolute top-44 left-32">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
    </div>
    <div class="bg-green-700 w-8 h-8 absolute top-40 left-28">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
    </div>
    <div class="bg-green-700 w-8 h-8 absolute top-36 left-24">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
    </div>
    <div class="bg-green-700 w-8 h-8 absolute top-28 left-40">
        <div class="bg-green-700 w-8 h-8 rotate-45">
        </div>
    </div>
    
    <div class="bg-red-950 w-8 h-8 absolute top-80 left-44">
        <div class="bg-red-950 w-16 h-2 rotate-12 relative top-8 left-6">
        <div class="bg-red-950 w-4 h-1 -rotate-45 relative top-3 left-4">
        </div>
        <div class="bg-red-950 w-4 h-1 rotate-90 relative top-2 left-9">
        </div>
        <div class="bg-red-950 w-4 h-1 rotate-45 relative top-1 left-14">
        </div>
        <div class="bg-red-950 w-4 h-1 rotate-12 relative bottom-2 left-16">
        </div>
        </div>
        <div class="bg-red-950 w-16 h-2 -rotate-12 relative top-6 right-14">
        <div class="bg-red-950 w-4 h-1 -rotate-45 relative top-3 right-2">
        </div>
        <div class="bg-red-950 w-4 h-1 rotate-90 relative top-2 left-5">
        </div>
        <div class="bg-red-950 w-4 h-1 rotate-45 relative top-1 left-12">
        </div>
        <div class="bg-red-950 w-4 h-1 -rotate-12 relative bottom-2 right-4">
        </div>
        </div>
    </div>
    <div class="bg-red-950 w-8 h-8 absolute top-72 left-44">
        <div class="bg-red-950 w-24 h-2 -rotate-45">
        <div class="bg-red-950 w-4 h-1 relative left-20 top-3 rotate-90">
        </div>
        </div>
    </div>
    <div class="bg-red-950 w-8 h-8 absolute top-64 left-44">
        <div class="bg-red-950 w-24 h-2 rotate-45 relative right-16 bottom-4">
        </div>
    </div>
    <div class="bg-red-950 w-8 h-8 absolute top-56 left-44">
    </div>
    <div class="bg-red-950 w-8 h-8 absolute top-48 left-44">
        <div class="bg-red-950 w-20 h-4 rotate-45 relative right-14 bottom-7">
        <div class="bg-red-950 w-20 h-4 -rotate-90 relative bottom-12 left-8">
        <div class="bg-green-700 w-8 h-8 relative bottom-16 right-0">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-28 right-5">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-28 right-5">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-2 right-5">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-36 left-4">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-48 left-11">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-48 left-11">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-64 left-3">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-20 left-20">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-20 left-20">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-20 left-20">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-20 left-20">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-20 left-20">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-32 left-12">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-32 left-12">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-48 left-4">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-48 left-4">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-60 right-4">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-72 right-4">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-96 left-12">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        <div class="bg-green-700 w-8 h-8 relative bottom-80 left-0">
            <div class="bg-green-700 w-8 h-8 rotate-45">
            </div>
        </div>
        </div>
    </div>
    <div class=" bg-red-700 w-10 h-10 rounded-full absolute top-80 left-40">
        <div class=" bg-orange-500 w-8 h-8 rounded-full relative top-1 left-1">
        <div class=" bg-yellow-400 w-6 h-6 rounded-full relative top-1 left-1">
        </div>
        </div>
    </div>
    <div class=" bg-red-700 w-10 h-10 rounded-full absolute top-60 left-52">
        <div class=" bg-orange-500 w-8 h-8 rounded-full relative top-1 left-1">
        <div class=" bg-yellow-400 w-6 h-6 rounded-full relative top-1 left-1">
        </div>
        </div>
    </div>
    <div class=" bg-red-700 w-10 h-10 rounded-full absolute top-52 left-20">
        <div class=" bg-orange-500 w-8 h-8 rounded-full relative top-1 left-1">
        <div class=" bg-yellow-400 w-6 h-6 rounded-full relative top-1 left-1">
        </div>
        </div>
    </div>
    <div class=" bg-red-700 w-10 h-10 rounded-full absolute top-44 left-44">
        <div class=" bg-orange-500 w-8 h-8 rounded-full relative top-1 left-1">
        <div class=" bg-yellow-400 w-6 h-6 rounded-full relative top-1 left-1">
        </div>
        </div>
    </div>
    <div class=" bg-red-700 w-10 h-10 rounded-full absolute top-32 left-28">
        <div class=" bg-orange-500 w-8 h-8 rounded-full relative top-1 left-1">
        <div class=" bg-yellow-400 w-6 h-6 rounded-full relative top-1 left-1">
        </div>
        </div>
    </div>
    <div class=" bg-red-700 w-10 h-10 rounded-full absolute top-32 left-52">
        <div class=" bg-orange-500 w-8 h-8 rounded-full relative top-1 left-1">
        <div class=" bg-yellow-400 w-6 h-6 rounded-full relative top-1 left-1">
        </div>
        </div>
    </div>
    </div>
  </div>
  </>;
}
