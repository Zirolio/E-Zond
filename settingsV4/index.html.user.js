<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Zirolio/E-Zond/settingsV3.1/main.css"> -->
<!-- <link rel="stylesheet" href="./main.css"> -->
<div class="min-w-[490px] py-12 pt-8 px-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center flex flex-col bg-main1 rounded-xl font-bitter">
    <p class="text-4xl mb-8 text-green-500 select-none">Zond Settings</p>
    <div class="flex flex-col items-center justify-start w-full max-h-[400px] overflow-y-scroll pathTrans py-3">
        <!-- Map -->
        <p class="mb-3 text-4xl text-purple-400 select-none">Map</p>
        <div class="flex justify-between items-center text-purple-400 px-1 w-full mb-2">
            <label for="AreaShadow" class="text-nowrap text-xl select-none mr-4">Area Shadow:</label>
            <input id="AreaShadow" class="mr-[66.5px] cursor-pointer hover:purpleShadow w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-purple-400 px-2 py-1" type="checkbox" onclick="window._client.updateParam('AreaShadow', this)">
        </div>
        <div class="flex justify-between items-center text-purple-400 px-1 w-full mb-2">
            <label for="ballsVisibleHuck" class="text-nowrap text-xl select-none mr-4">Balls Visible Huck (BETA!!!):</label>
            <input id="ballsVisibleHuck" class="mr-[66.5px] cursor-pointer hover:purpleShadow w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-purple-400 px-2 py-1" type="checkbox" onclick="window._client.updateParam('ballsVisibleHuck', this)">
        </div>
        <div class="flex justify-between items-center text-purple-400 px-1 w-full mb-2">
            <label for="ballsOnMap" class="text-nowrap text-xl select-none mr-4">Balls on map:</label>
            <input id="ballsOnMap" class="mr-[66.5px] cursor-pointer hover:purpleShadow w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-purple-400 px-2 py-1" type="checkbox" onclick="window._client.updateParam('ballsOnMap', this)">
        </div>
        <div class="flex justify-between items-center text-purple-400 px-1 w-full mb-2">
            <label for="-ballsOpacity" class="text-nowrap text-xl select-none mr-4">Balls opacity:</label>
            <input id="ballsOpacity" class="cursor-pointer hover:purpleShadow border-2 border-t-0 rounded-b-md border-purple-400" type="range" oninput="window._client.updateParam('ballsOpacity', this)" min=0 max=100>
        </div>
        <div class="flex justify-between items-center text-purple-400 px-1 w-full">
            <label for="-minLighting" class="text-nowrap text-xl select-none mr-4">Min area lighting:</label>
            <input id="minLighting" class="cursor-pointer hover:purpleShadow border-2 border-t-0 rounded-b-md border-purple-400" type="range" oninput="window._client.updateParam('minLighting', this)" min=0 max=100>
        </div>
        <!-- Abilitys -->
        <p class="my-3 text-4xl text-orange-400 select-none">Abilitys</p>
        <div class="flex justify-between items-center px-1 w-full mb-2">
            <label for="abilitys1" class="text-xl text-orange-400 mr-4 select-none">Autouse one:</label>
            <input id="abilitys1" class="mr-[66.5px] cursor-pointer w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-orange-400 hover:orangeShadow px-2 py-1" type="checkbox" lass="zond-checkbox" onclick="window._client.updateParam('au one', this)">
        </div>
        <div class="flex justify-between items-center px-1 w-full mb-2">
            <label for="abilitys2" class="text-xl text-orange-400 mr-4 select-none">Autouse two:</label>
            <input id="abilitys2" class="mr-[66.5px] cursor-pointer w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-orange-400 hover:orangeShadow px-2 py-1" type="checkbox" lass="zond-checkbox" onclick="window._client.updateParam('au two', this)">
        </div>
        <div class="flex justify-between items-center px-1 w-full mb-2">
            <label for="abilitys3" class="text-xl text-orange-400 mr-4 select-none">Autouse three:</label>
            <input id="abilitys3" class="mr-[66.5px] cursor-pointer w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-orange-400 hover:orangeShadow px-2 py-1" type="checkbox" lass="zond-checkbox" onclick="window._client.updateParam('au three', this)">
        </div>
        <div class="flex justify-between items-center px-1 w-full mb-2">
            <label for="abilitys4" class="text-xl text-orange-400 mr-4 select-none">Autouse one on new Area:</label>
            <input id="abilitys4" class="mr-[66.5px] cursor-pointer w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-orange-400 hover:orangeShadow px-2 py-1" type="checkbox" lass="zond-checkbox" onclick="window._client.updateParam('auNA one', this)">
        </div>
        <div class="flex justify-between items-center px-1 w-full mb-2">
            <label for="abilitys5" class="text-xl text-orange-400 mr-4 select-none">Autouse two on new Area:</label>
            <input id="abilitys5" class="mr-[66.5px] cursor-pointer w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-orange-400 hover:orangeShadow px-2 py-1" type="checkbox" lass="zond-checkbox" onclick="window._client.updateParam('auNA two', this)">
        </div>
        <div class="flex justify-between items-center px-1 w-full">
            <label for="abilitys6" class="text-xl text-orange-400 mr-4 select-none">Ignore energy:</label>
            <input id="abilitys6" class="mr-[66.5px] cursor-pointer w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-orange-400 hover:orangeShadow px-2 py-1" type="checkbox" lass="zond-checkbox" onclick="window._client.updateParam('ignoreEnergy', this)">
        </div>
        <!-- Hero -->
        <p class="my-3 text-4xl text-red-400 select-none">Hero</p>
        <div class="flex items-center justify-between text-red-400 w-full px-1 mb-2">
            <label for="showReaperShadow" class="text-xl mr-3 select-none">Reaper Shadow:</label>
            <input id="showReaperShadow" class="mr-[66.5px] cursor-pointer hover:redShadow w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-red-400 px-2 py-1" type="checkbox" onclick="window._client.updateParam('showReaperShadow', this)">
        </div>
        <div class="flex items-center justify-between text-red-400 w-full px-1 mb-2">
            <label for="ChronoShadow" class="text-xl mr-3 select-none">Chrono Shadow:</label>
            <input id="ChronoShadow" class="mr-[66.5px] cursor-pointer hover:redShadow w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-red-400 px-2 py-1" type="checkbox" onclick="window._client.updateParam('ChronoShadow', this)">
        </div>
        <div class="flex items-center justify-between text-red-400 w-full px-1 mb-2">
            <label for="aur" class="text-xl mr-3 select-none">Chrono Auto Use Res (BETA!!!):</label>
            <input id="aur" class="mr-[66.5px] cursor-pointer hover:redShadow w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-red-400 px-2 py-1" type="checkbox" onclick="window._client.updateParam('aur', this)">
        </div>
        <div class="flex items-center justify-between text-red-400 w-full px-1 mb-2">
            <label for="necroAIM" class="text-xl mr-3 select-none">Necro AIM:</label>
            <input id="necroAIM" class="mr-[66.5px] cursor-pointer hover:redShadow w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-red-400 px-2 py-1" type="checkbox" onclick="window._client.updateParam('necroAIM', this)">
        </div>
        <div class="flex items-center justify-between text-red-400 w-full px-1 mb-2">
            <label for="snowballAIM" class="text-xl mr-3 select-none">Snowball AIM:</label>
            <input id="snowballAIM" class="mr-[66.5px] cursor-pointer hover:redShadow w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-red-400 px-2 py-1" type="checkbox" onclick="window._client.updateParam('snowballAIM', this)">
        </div>
        <div class="flex items-center justify-between text-red-400 w-full px-1">
            <label for="echelonAIM" class="text-xl mr-3 select-none">Echelon AIM:</label>
            <input id="echelonAIM" class="mr-[66.5px] cursor-pointer hover:redShadow w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-red-400 px-2 py-1" type="checkbox" onclick="window._client.updateParam('echelonAIM', this)">
        </div>
        <div class="flex items-center justify-between text-red-400 w-full px-1">
            <label for="ramesesAIM" class="text-xl mr-3 select-none">Rameses AIM:</label>
            <input id="ramesesAIM" class="mr-[66.5px] cursor-pointer hover:redShadow w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-red-400 px-2 py-1" type="checkbox" onclick="window._client.updateParam('ramesesAIM', this)">
        </div>
        <!-- Other -->
        <p class="my-3 text-4xl text-yellow-400 select-none">Other</p>
        <div class="flex items-center justify-between px-1 w-full mb-2">
            <label for="deathsC" class="text-xl text-yellow-400 select-none mr-4">Death counter:</label>
            <input id="deathsC" class="mr-[66.5px] cursor-pointer hover:yellowShadow w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-yellow-400 px-2 py-1" type="checkbox" onclick="window._client.updateParam('deathsC', this)">
        </div>
        <div class="flex items-center justify-between px-1 w-full mb-2">
            <label for="antiAFK" class="text-xl text-yellow-400 select-none mr-4">AntiAFK:</label>
            <input id="antiAFK" class="mr-[66.5px] cursor-pointer hover:yellowShadow w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-yellow-400 px-2 py-1" type="checkbox" onclick="window._client.updateParam('antiAFK', this)">
        </div>
        <div class="flex items-center justify-between px-1 w-full mb-2">
            <label for="chatMessages" class="text-xl text-yellow-400 select-none mr-4">Chat Messages:</label>
            <input id="chatMessages" class="mr-[66.5px] cursor-pointer hover:yellowShadow w-[15px] h-[15px] translate-x-1/2 border-2 border-t-0 rounded-b-md border-yellow-400 px-2 py-1" type="checkbox" onclick="window._client.updateParam('chatMessages', this)">
        </div>
        <div class="flex items-center justify-between px-1 w-full">
            <label for="-Zoom" class="text-xl text-yellow-400 select-none mr-4">Zoom:</label>
            <input id="Zoom" class="cursor-pointer hover:yellowShadow border-2 border-t-0 rounded-b-md border-yellow-400" type="range" oninput="window._client.updateParam('Zoom', this)" min=35 max=100>
        </div>
    </div>
    <!-- Exit -->
    <button class="hover:greenTextShadow-1 hover:greenShadow mt-6 px-10 py-1 text-2xl text-green-500 border-2 border-green-500 rounded-md" onclick="window._client.settings.show$hide()">Exit</button>
</div>